import { Color, RawShaderMaterial, Texture, Vector4 } from 'three';
export interface TileCacheWriterPointMaterialParameters {
    color: Color;
    tileTex: Texture;
    viewWidth: number;
    viewHeight: number;
    pixelsPerTile: number;
    pixelsPerCacheEdge: number;
    mapDepthCacheTexture?: Texture;
    mapDepthCacheUvST?: Vector4;
    alternateDepthTileTex?: Texture;
    depthSortByY?: boolean;
    z: number;
    useXYZ: boolean;
    zSlideScale: number;
    zColorScale: number;
}
export declare class TileCacheWriterPointMaterial extends RawShaderMaterial {
    private _mapDepthCacheTextureUniform;
    get mapDepthCacheTexture(): Texture;
    set mapDepthCacheTexture(value: Texture);
    private _zSlideScaleUniform;
    get zSlideScale(): number;
    set zSlideScale(value: number);
    private _zColorScaleUniform;
    get zColorScale(): number;
    set zColorScale(value: number);
    get tileTexture(): Texture;
    set tileTexture(value: Texture);
    get alternateDepthTileTexture(): Texture;
    set alternateDepthTileTexture(value: Texture);
    private _tileTexUniform;
    private _alternateDepthTileTexUniform;
    constructor(options?: Partial<TileCacheWriterPointMaterialParameters>);
}
