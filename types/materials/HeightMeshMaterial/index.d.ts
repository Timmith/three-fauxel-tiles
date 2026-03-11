import { RawShaderMaterial, Vector4 } from 'three';
interface Parameters {
    data: Vector4;
    heightChannel: 'r' | 'g' | 'b';
    wireframe?: boolean;
    visible?: boolean;
}
export declare class HeightMeshMaterial extends RawShaderMaterial {
    constructor(options?: Partial<Parameters>);
}
export {};
