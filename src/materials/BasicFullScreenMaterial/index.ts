import { RawShaderMaterial, Texture, Uniform, Vector2, Vector3 } from 'three'
import { pixelAspectRatioUniform } from '~/uniforms'
import { buildParameters } from '~/utils/jsUtils'
import { getTempTexture } from '~/utils/threeUtils'

import fragmentShader from './frag.glsl'
import vertexShader from './vert.glsl'

interface Parameters {
  mapTex: Texture
  tileTex: Texture
  transform: Vector3
  tilesPerEdge: number
  useTwoLayers: boolean
}

const __defaultParams: Parameters = {
  mapTex: getTempTexture(),
  tileTex: getTempTexture(),
  transform: new Vector3(0, 0, 1 / 2048),
  tilesPerEdge: 8,
  useTwoLayers: false
}

function getTextureSize(texture: Texture) {
  const image = texture.image as { width?: number; height?: number } | undefined
  return new Vector2(image?.width ?? 1, image?.height ?? 1)
}

export class BasicFullScreenMaterial extends RawShaderMaterial {
  constructor(options: Partial<Parameters>) {
    const params = buildParameters(__defaultParams, options)
    const defines: any = {
      RESOLUTION: params.tilesPerEdge.toFixed(1)
    }
    if (params.useTwoLayers) {
      defines.USE_TWO_LAYERS = true
    }
    super({
      uniforms: {
        uMapTex: new Uniform(params.mapTex),
        uMapSize: new Uniform(getTextureSize(params.mapTex)),
        uTileTex: new Uniform(params.tileTex),
        uTransform: new Uniform(params.transform),
        uAspectRatio: pixelAspectRatioUniform
      },
      defines,
      vertexShader,
      fragmentShader,
      // transparent: true,
      depthWrite: false,
      depthTest: false
      // side: DoubleSide
    })
  }
}
