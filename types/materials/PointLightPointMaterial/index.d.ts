import { RawShaderMaterial, Texture } from 'three';
export interface PointLightPointMaterialParameters {
    viewWidth: number;
    viewHeight: number;
    pixelsPerTile: number;
    relativeTileSize: number;
    relativePixelSize: number;
    pixelsPerCacheEdge: number;
    mapCacheColorsTexture: Texture;
    mapCacheNormalsTexture: Texture;
    mapCacheRoughnessMetalnessHeightTexture: Texture;
    mapCacheDepthTopDownTexture: Texture;
    z: number;
    useShadows: boolean;
    shadowResolution: number;
}
export declare class PointLightPointMaterial extends RawShaderMaterial {
    constructor(options?: Partial<PointLightPointMaterialParameters>);
}
