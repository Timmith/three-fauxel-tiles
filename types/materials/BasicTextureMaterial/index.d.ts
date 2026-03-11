import { RawShaderMaterial, Texture, Vector4 } from 'three';
interface Parameters {
    uvST: Vector4;
    texture: Texture;
    clipspaceMode: boolean;
}
export declare class BasicTextureMaterial extends RawShaderMaterial {
    get texture(): Texture;
    set texture(value: Texture);
    private _uTexture;
    constructor(options?: Partial<Parameters>);
}
export {};
