import { Vector2, Vector4, WebGLRenderer, WebGLRenderTarget } from 'three';
export default class TextureCachingScroller {
    private _externalRender;
    cacheRenderTarget: WebGLRenderTarget;
    lastScrollOffset: Vector2;
    scrollOffset: Vector2;
    cacheResolution: Vector2;
    cacheDirty: boolean;
    uvST: Vector4;
    constructor(_externalRender: (renderer: WebGLRenderer) => void);
    render(renderer: WebGLRenderer, dt: number): void;
    private _renderCache;
}
