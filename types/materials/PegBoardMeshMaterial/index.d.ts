import { MaterialParameters, RawShaderMaterial, Vector2, Vector4 } from 'three';
interface Parameters {
    smoothOffset: Vector2;
    data: Vector4;
}
export default class PegboardMeshMaterial extends RawShaderMaterial {
    constructor(options?: Partial<Parameters>, matOptions?: MaterialParameters);
}
export {};
