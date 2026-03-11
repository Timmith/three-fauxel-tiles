import { BufferGeometry, Color, OrthographicCamera, Points, Scene, WebGLRenderer } from 'three';
import { PointLightPointMaterial, PointLightPointMaterialParameters } from '../materials/PointLightPointMaterial';
import MapWithSpritesCacheRenderer from './MapWithSpritesCacheRenderer';
export declare class LightController {
    x: number;
    y: number;
    z: number;
    size: number;
    color: Color;
    constructor(x: number, y: number, z: number, size: number, color: Color);
}
declare class LightGroup {
    useShadows: boolean;
    update(ppt: number, offsetX: number, offsetY: number, viewWidth: number, viewHeight: number): number;
    private _lights;
    private _lightPointsGeo;
    pointLightPoints: Points<BufferGeometry, PointLightPointMaterial>;
    constructor(useShadows: boolean, maxPointLights: number, matParams: Partial<PointLightPointMaterialParameters>);
    makeLight(x: number, y: number, z: number, size: number, color: Color): LightController;
}
export default class PointLightRenderer {
    private _mapCacheRenderer;
    private _viewWidth;
    private _viewHeight;
    private _maxPointLights;
    private _pixelsPerTile;
    private _lightGroups;
    private _lightGroupsLookup;
    private _pixelsWidth;
    private _pixelsHeight;
    getLightGroup(useShadows?: boolean, shadowResolution?: number): LightGroup;
    private _renderTarget;
    get texture(): import("three").Texture;
    pointLightScene: Scene;
    pointLightCamera: OrthographicCamera;
    offsetX: number;
    offsetY: number;
    constructor(_mapCacheRenderer: MapWithSpritesCacheRenderer, _viewWidth: number, _viewHeight: number, _maxPointLights: number, _pixelsPerTile?: number, useShadows?: boolean);
    render(renderer: WebGLRenderer): void;
}
export {};
