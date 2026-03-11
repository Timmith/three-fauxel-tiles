import { Matrix3, RawShaderMaterial } from 'three';
interface Parameters {
    wireframe?: boolean;
    visible?: boolean;
}
export declare class WorldNormalMeshMaterial extends RawShaderMaterial {
    modelNormalMatrix: Matrix3;
    constructor(options?: Partial<Parameters>);
}
export {};
