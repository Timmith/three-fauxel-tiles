import { NearestFilter, Texture } from 'three'
import { loadText, loadTexture } from '../../loaders/assetLoader'

function url(path: string, ext: string) {
  return `${path}.${ext}`
}

export default class PixelFontFace {
  font?: string
  pixelWidths?: number[]
  texture?: Texture
  private _initialized = false

  constructor(
    public name: string,
    public maxCharPixelWidth = 7,
    public charPixelHeight = 8
  ) {}

  async init() {
    if (this._initialized) {
      return
    }
    this._initialized = true

    this.texture = await loadTexture(url(this.name, 'png'))
    this.texture.minFilter = NearestFilter
    this.texture.magFilter = NearestFilter

    const widthsText = (
      await loadText(url(`${this.name}_char-widths`, 'txt'))
    ).replace(/\n/g, '')

    this.pixelWidths = Array.from(widthsText, (digit) =>
      Number.parseInt(digit, 10)
    )
    this.font = (await loadText(url(this.name, 'txt'))).replace(/\n/g, '')
  }
}

export const pixelFontFaces = {
  cdogs_font_7x8: new PixelFontFace('pixelFonts/cdogs_font_7x8', 7, 8),
  good_neighbors: new PixelFontFace('pixelFonts/good_neighbors', 11, 16)
}
