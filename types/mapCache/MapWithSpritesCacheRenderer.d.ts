import { BufferGeometry, Mesh, OrthographicCamera, PlaneGeometry, Scene, WebGLRenderer, WebGLRenderTarget } from 'three';
import { MaterialPassType } from '../helpers/materials/materialLib';
import JITSpriteSampler from '../rendering/tileMaker/spriteMaker/JITSpriteSampler';
import MapCacheRenderer from '../mapCache/MapCacheRenderer';
import { BasicTextureMaterial } from '../materials/BasicTextureMaterial';
export default class MapWithSpritesCacheRenderer {
    private _mapCacheRenderer;
    private _jitSpriteSampler;
    mapCache: Map<MaterialPassType, WebGLRenderTarget>;
    mapCacheScene: Scene;
    mapCacheCamera: OrthographicCamera;
    mapCacheBackdropMaterial: BasicTextureMaterial;
    spriteBottomPointsGeo: BufferGeometry;
    spriteTopPointsGeo: BufferGeometry;
    private _pointsTopMaterial;
    private _pointsBottomMaterial;
    backdrop: Mesh<PlaneGeometry, BasicTextureMaterial>;
    offsetX: number;
    offsetY: number;
    private _backdropUvST;
    private _tilesInViewWidth;
    private _tilesInViewHeight;
    constructor(_mapCacheRenderer: MapCacheRenderer, width: number, height: number, maxSprites: number, _jitSpriteSampler: JITSpriteSampler, pixelsPerTile?: number, pixelsPerCacheEdge?: number);
    render(renderer: WebGLRenderer): void;
}
