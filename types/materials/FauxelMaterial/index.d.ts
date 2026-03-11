import { Color, RawShaderMaterial, Texture, Vector2, Vector3, Vector4 } from 'three';
interface Parameters {
    uvST: Vector4;
    uvSTWorldOffset: Vector4;
    textureColor: Texture;
    textureNormals: Texture;
    textureEmissive: Texture;
    textureRoughnessMetalnessHeight: Texture;
    textureTopDownHeight: Texture;
    texturePointLights: Texture;
    clipspaceMode: boolean;
    sunDirection: Vector3;
    sunDirectionForWater: Vector3;
    sunShadowDirection: Vector3;
    colorLightAmbient: Color;
    colorDarkAmbient: Color;
    colorSun: Color;
    relativeTileSize: number;
    relativePixelSize: number;
    pixelsPerTile: number;
    textureFog: Texture;
    fogScroll: Vector2;
    waterHeight: number;
    useWater: boolean;
    useOutlines: boolean;
}
export declare class FauxelMaterial extends RawShaderMaterial {
    setSunAngle: (sunAngle: number) => void;
    private _useSunShadows;
    get useSunShadows(): boolean;
    set useSunShadows(value: boolean);
    constructor(options?: Partial<Parameters>);
}
export {};
