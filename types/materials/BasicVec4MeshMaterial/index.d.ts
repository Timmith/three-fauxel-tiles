import { RawShaderMaterial, Vector4 } from 'three';
interface Parameters {
    data: Vector4;
    wireframe?: boolean;
    visible?: boolean;
    vertexColors?: boolean;
}
export default class BasicVec4MeshMaterial extends RawShaderMaterial {
    constructor(options?: Partial<Parameters>);
}
export {};
