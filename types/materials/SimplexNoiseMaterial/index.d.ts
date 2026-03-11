import { Color, RawShaderMaterial, Vector4 } from 'three';
interface Parameters {
    mode: 'normals' | 'simple';
    uvST: Vector4;
    color: Color;
}
export declare class SimplexNoiseMaterial extends RawShaderMaterial {
    constructor(options?: Partial<Parameters>);
}
export {};
