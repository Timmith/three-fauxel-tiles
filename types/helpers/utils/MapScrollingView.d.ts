import { Mesh, Vector4, WebGLRenderer } from 'three';
import { MaterialPassType } from '../materials/materialLib';
import SpriteMaker from '../../rendering/tileMaker/spriteMaker/SpriteMaker';
import JITTileSampler from '../../rendering/tileMaker/mapTileMaker/JITTileSampler';
import JITSpriteSampler from '../../rendering/tileMaker/spriteMaker/JITSpriteSampler';
import MapCacheRenderer from '../../mapCache/MapCacheRenderer';
import MapTileMaker from '../../rendering/tileMaker/mapTileMaker/MapTileMaker';
import MapWithSpritesCacheRenderer from '../../mapCache/MapWithSpritesCacheRenderer';
import PointLightRenderer from '../../mapCache/PointLightRenderer';
import type { MapTileMakerOptions } from '../../rendering/tileMaker/mapTileMaker/MapTileMaker';
export type MapScrollingViewOptions = {
    tileMaker?: MapTileMakerOptions;
    useOutlines?: boolean;
};
export default class MapScrollingView {
    tileMaker: MapTileMaker;
    spriteMaker: SpriteMaker;
    jitTileSampler: JITTileSampler;
    jitSpriteSampler: JITSpriteSampler;
    mapCacheRenderer: MapCacheRenderer;
    mapWithSpritesCacheRenderer: MapWithSpritesCacheRenderer;
    pointLightRenderer: PointLightRenderer;
    private _dirty;
    mapCachePassViews: Mesh[];
    private _noiseMaker;
    mapCacheFinalView: Mesh;
    private _noiseReady;
    private _mapScrollingViewMaterial;
    get offsetX(): number;
    set offsetX(value: number);
    get offsetY(): number;
    set offsetY(value: number);
    constructor(viewWidth?: number, viewHeight?: number, pixelsPerTile?: number, pixelsPerCacheEdge?: number, mapViewUvST?: Vector4, mapViewSubTilePixelOffsetUvST?: Vector4, clipspaceMode?: boolean, passes?: MaterialPassType[], options?: MapScrollingViewOptions);
    render(renderer: WebGLRenderer, dt: number): void;
}
