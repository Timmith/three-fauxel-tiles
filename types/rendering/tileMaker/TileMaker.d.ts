import { Object3D, OrthographicCamera, Scene, WebGLRenderTarget } from 'three';
import { MaterialPassType } from '../../helpers/materials/materialLib';
export default class TileMaker {
    protected _pixelsPerTile: number;
    protected _passes: MaterialPassType[];
    protected _pivot: Object3D;
    get passes(): MaterialPassType[];
    set passes(value: MaterialPassType[]);
    protected _renderQueue: number[];
    protected _tileRegistry: Uint8Array[];
    protected _tileHashRegistry: string[];
    protected _tileHashBirthday: number[];
    protected _scene: Scene;
    protected _cameraTiltedBottom: OrthographicCamera;
    protected _cameraTiltedTop: OrthographicCamera;
    protected _cameraTopDown: OrthographicCamera;
    protected _renderTargets: Map<MaterialPassType, WebGLRenderTarget>;
    protected _indexedMeshesVisibility: boolean[];
    protected _indexedMeshes: (() => Object3D)[];
    protected _tilesPerEdge: number;
    protected _maxTiles: number;
    constructor(_pixelsPerTile: number, pixelsPerCacheEdge: number | undefined, _passes: MaterialPassType[], indexedMeshMakers: (() => Object3D)[]);
    getTexture(pass?: MaterialPassType): import("three").Texture;
    getTileId(tileDescription: Uint8Array): number;
}
