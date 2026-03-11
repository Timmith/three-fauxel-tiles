import {
  BufferGeometry,
  Camera,
  ClampToEdgeWrapping,
  Color,
  DataTexture,
  Group,
  IUniform,
  Material,
  Matrix4,
  Mesh,
  NearestFilter,
  PlaneGeometry,
  RGBAFormat,
  RawShaderMaterial,
  Scene,
  ShaderMaterial,
  Texture,
  Uniform,
  UnsignedByteType,
  UVMapping,
  Vector2,
  Vector4,
  WebGLRenderer
} from 'three'
import {
  listenToProperty,
  stopListeningToProperty
} from '../../utils/propertyListeners'
import { getTempTexture } from '../../utils/threeUtils'
import PixelFontFace from './PixelFontFace'
import { PixelTextSettings, pixelTextSettings } from './PixelTextSettings'

import fragmentShader from './frag.glsl'
import vertexShader from './vert.glsl'

const tempMatrix = new Matrix4()
const trackedFontFaceTextures: Texture[] = []
const maxLines = 2048

function getFontFaceSubOrder(texture?: Texture) {
  if (!texture) {
    return -1
  }

  const existingIndex = trackedFontFaceTextures.indexOf(texture)
  if (existingIndex !== -1) {
    return existingIndex
  }

  trackedFontFaceTextures.push(texture)
  return trackedFontFaceTextures.length - 1
}

type TextShaderUniforms = {
  fontTexture: IUniform<Texture>
  layoutTexture: IUniform<Texture>
  color: IUniform<Color>
  strokeColor: IUniform<Color>
  clipSpacePosition?: IUniform<Vector4>
  pixelSizeInClipSpace?: IUniform<Vector2>
  prescale?: IUniform<number>
  alignment?: IUniform<Vector2>
}

function initMaterial(settings: PixelTextSettings) {
  const uniforms = {
    layoutTexture: new Uniform(getTempTexture()),
    fontTexture: new Uniform(settings.fontFace.texture),
    color: new Uniform(new Color(settings.color)),
    strokeColor: new Uniform(new Color(settings.strokeColor)),
    fontSizeInChars: new Uniform(new Vector2(1, 1)),
    layoutSizeInChars: new Uniform(new Vector2(1, 1)),
    layoutSizeInCharColumns: new Uniform(new Vector2(1, 1)),
    alignment: new Uniform(new Vector2(settings.align, -settings.vAlign))
  }

  const safeUniforms = uniforms as TextShaderUniforms
  if (settings.screenSpace) {
    safeUniforms.prescale = new Uniform(settings.prescale)
    safeUniforms.clipSpacePosition = new Uniform(new Vector4())
    if (!settings.pixelSizeInClipSpaceUniform) {
      throw new Error(
        'You must provide a pixelSizeInClipSpaceUniform for screenSpace mode'
      )
    }
    safeUniforms.pixelSizeInClipSpace = settings.pixelSizeInClipSpaceUniform
  }

  return new RawShaderMaterial({
    defines: {
      USE_SCREENSPACE: settings.screenSpace,
      CONSTANT_SIZE_ON_SCREEN: settings.constantSizeOnScreen
    },
    uniforms,
    vertexShader,
    fragmentShader,
    depthWrite: true
  })
}

const tempBlankGeo = new PlaneGeometry(0.001, 0.001)
tempBlankGeo.computeBoundingBox()

const textGeo = new PlaneGeometry(1, 1)
const positionAttr = textGeo.attributes.position
const positionArr = positionAttr.array as Float32Array
for (let i = 0; i < positionAttr.count; i++) {
  const i3 = i * 3
  positionArr[i3] += 0.5
  positionArr[i3 + 1] -= 0.5
}
textGeo.computeBoundingBox()

function getTextGeometry(text: string, settings: PixelTextSettings) {
  if (settings.fontFace.font && text) {
    return textGeo
  }
  return tempBlankGeo
}

export default class PixelTextMesh extends Mesh {
  width = 0
  height = 0
  dirty = false
  livePropObject?: object
  livePropName?: string

  private _fontFace?: PixelFontFace
  private _newTexture?: Texture
  private _newFontString?: string

  constructor(
    private _text = '',
    public settings: PixelTextSettings = pixelTextSettings.generic,
    public onMeasurementsUpdated?: (mesh: PixelTextMesh) => void,
    public onCharSizeUpdated?: (width: number, height: number) => void,
    public optimizeRenderOrder = true
  ) {
    super(getTextGeometry(_text, settings), initMaterial(settings))
    listenToProperty(settings, 'fontFace', this.onFontFaceChange, true)
  }

  get text() {
    return this._text
  }

  set text(text: string) {
    if (this._text !== text) {
      this._text = text
      this.dirty = true
    }
  }

  onFontFaceChange = (
    newFontFace: PixelFontFace,
    oldFontFace?: PixelFontFace
  ) => {
    if (oldFontFace) {
      stopListeningToProperty(oldFontFace, 'texture', this.onFontTextureUpdate)
      stopListeningToProperty(oldFontFace, 'font', this.onFontUpdate)
    }

    listenToProperty(newFontFace, 'texture', this.onFontTextureUpdate)
    listenToProperty(newFontFace, 'font', this.onFontUpdate)
    newFontFace.init()
    this._fontFace = newFontFace
  }

  onFontTextureUpdate = (texture: Texture) => {
    this._newTexture = texture
    this.dirty = true
  }

  onFontUpdate = (fontString: string) => {
    this._newFontString = fontString
    this.dirty = true
  }

  onBeforeRender = (
    renderer: WebGLRenderer,
    scene: Scene,
    camera: Camera,
    geometry: BufferGeometry,
    material: Material,
    group: Group
  ) => {
    if (this.settings.screenSpace) {
      const clipPos = (this.material as ShaderMaterial).uniforms
        .clipSpacePosition.value as Vector4
      tempMatrix
        .multiplyMatrices(camera.matrixWorldInverse, this.matrixWorld)
        .premultiply(camera.projectionMatrix)
      clipPos.set(0, 0, 0, 1).applyMatrix4(tempMatrix)
    }

    if (!this.dirty) {
      return
    }

    this.dirty = false
    this.regenerateGeometry()
    const materialUniforms = (this.material as ShaderMaterial).uniforms

    if (this._newTexture) {
      if (this.optimizeRenderOrder) {
        this.renderOrder =
          this.renderOrder || 100 + getFontFaceSubOrder(this._newTexture)
      }
      materialUniforms.fontTexture.value = this._newTexture
      this._newTexture = undefined
    }

    if (!(this._newFontString && this._text)) {
      return
    }

    const lines = this.text.split('\n').slice(0, maxLines)
    const charsHeight = lines.length
    const fontSettings = this.settings.fontFace
    const maxWidthOfChar = fontSettings.maxCharPixelWidth
    const fontString = fontSettings.font!
    const charPixelWidths = fontSettings.pixelWidths!
    const overlapPixels = -this.settings.letterSpacing

    const fontTexture = materialUniforms.fontTexture.value as Texture
    const image = fontTexture.image as { width: number; height: number }
    materialUniforms.fontSizeInChars.value.set(
      image.width / fontSettings.maxCharPixelWidth,
      image.height / fontSettings.charPixelHeight
    )

    const missingCharIndex = fontString.indexOf('□')
    if (missingCharIndex === -1) {
      throw new Error(
        'Please include this character □ in your font for missing glyphs'
      )
    }

    let missingChars = ''
    const linePixelWidths = lines.map((lineString) => {
      let pixelLength = 0
      for (let i = 0; i < lineString.length; i++) {
        const char = lineString[i]
        if (char === undefined) {
          continue
        }

        const charIndex = fontString.indexOf(char)
        if (charIndex === -1) {
          pixelLength +=
            maxWidthOfChar - charPixelWidths[missingCharIndex] - overlapPixels
          if (!missingChars.includes(char)) {
            missingChars += char
          }
        } else {
          pixelLength +=
            maxWidthOfChar - charPixelWidths[charIndex] - overlapPixels
        }
      }
      return pixelLength + overlapPixels
    })

    if (missingChars) {
      console.warn('Characters in text not found in font: ' + missingChars)
    }

    const maxPixelWidth = linePixelWidths.reduce((previous, current) => {
      return Math.max(previous, current)
    }, 0)

    const total = maxPixelWidth * charsHeight
    const data = new Uint8Array(total * 4)

    for (let iy = 0; iy < charsHeight; iy++) {
      const lineOffset = iy * maxPixelWidth
      let xCursor = 0
      const line = lines[iy]

      for (let ix = 0; ix <= line.length; ix++) {
        const char = line[ix]
        const prevChar = line[ix - 1]
        if (!char && !prevChar) {
          continue
        }

        let charIndex = fontString.indexOf(char)
        if (charIndex === -1 && char !== undefined) {
          charIndex = missingCharIndex
        }

        const charPixelWidth = maxWidthOfChar - charPixelWidths[charIndex]
        for (let ipx = 0; ipx < charPixelWidth; ipx++) {
          const index = (lineOffset + xCursor) * 4
          data[index] = charIndex
          data[index + 1] = (((xCursor - ipx) / maxWidthOfChar) % 1) * 255
          xCursor++
        }

        xCursor -= overlapPixels
        for (let i = 0; i < overlapPixels; i++) {
          const index = (lineOffset + xCursor + i) * 4
          data[index + 2] = data[index]
          data[index + 3] = data[index + 1]
        }
      }
    }

    materialUniforms.layoutSizeInChars.value.set(
      maxPixelWidth / maxWidthOfChar,
      charsHeight
    )
    materialUniforms.layoutSizeInCharColumns.value.set(
      maxPixelWidth,
      charsHeight
    )
    materialUniforms.layoutTexture.value = new DataTexture(
      data,
      maxPixelWidth,
      charsHeight,
      RGBAFormat,
      UnsignedByteType,
      UVMapping,
      ClampToEdgeWrapping,
      ClampToEdgeWrapping,
      NearestFilter,
      NearestFilter
    )

    if (this.onCharSizeUpdated) {
      this.onCharSizeUpdated(maxPixelWidth / maxWidthOfChar, charsHeight)
    }
  }

  updateText = (value: unknown = '') => {
    this.text = `${value}`
  }

  onRemove() {
    stopListeningToProperty(this.settings, 'fontFace', this.onFontFaceChange)
    if (this._fontFace) {
      stopListeningToProperty(
        this._fontFace,
        'texture',
        this.onFontTextureUpdate
      )
      stopListeningToProperty(this._fontFace, 'font', this.onFontUpdate)
    }
  }

  private regenerateGeometry() {
    this.geometry = getTextGeometry(this._text, this.settings)
    this.updateMeasurements()
  }

  private updateMeasurements() {
    const boundingBox = this.geometry.boundingBox!
    this.width = boundingBox.max.x - boundingBox.min.x
    this.height = Math.abs(boundingBox.max.y - boundingBox.min.y)
    this.userData.resolution = new Vector2(this.width, this.height)
    if (this.onMeasurementsUpdated) {
      this.onMeasurementsUpdated(this)
    }
  }
}
