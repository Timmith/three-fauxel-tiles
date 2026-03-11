import { RawShaderMaterial, Texture, Vector3 } from 'three';
interface Parameters {
    mapTex: Texture;
    tileTex: Texture;
    transform: Vector3;
    tilesPerEdge: number;
    useTwoLayers: boolean;
}
export declare class BasicFullScreenMaterial extends RawShaderMaterial {
    constructor(options: Partial<Parameters>);
}
export {};
