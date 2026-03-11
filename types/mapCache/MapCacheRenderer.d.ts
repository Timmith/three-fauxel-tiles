import { BufferGeometry, OrthographicCamera, Scene, WebGLRenderer, WebGLRenderTarget } from 'three';
import { MaterialPassType } from '../helpers/materials/materialLib';
import JITTileSampler from '../rendering/tileMaker/mapTileMaker/JITTileSampler';
export default class MapCacheRenderer {
    private _jitTileSampler;
    mapCache: Map<MaterialPassType, WebGLRenderTarget>;
    mapCacheScene: Scene;
    mapCacheCamera: OrthographicCamera;
    tileBottomPointsGeo: BufferGeometry;
    tileTopPointsGeo: BufferGeometry;
    private _pointsTopMaterial;
    private _pointsBottomMaterial;
    constructor(width: number, height: number, _jitTileSampler: JITTileSampler, pixelsPerTile?: number, pixelsPerCacheEdge?: number);
    render(renderer: WebGLRenderer): void;
}
