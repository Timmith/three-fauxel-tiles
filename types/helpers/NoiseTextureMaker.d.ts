import { Texture, WebGLRenderer } from 'three';
export default class NoiseTextureMaker {
    texture: Texture;
    private _renderTarget;
    private _scene;
    private _camera;
    constructor(res?: number);
    render(renderer: WebGLRenderer): void;
}
