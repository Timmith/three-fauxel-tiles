import { Object3D } from 'three';
import TileMaker from './TileMaker';
export default class DoubleCachedTileMaker extends TileMaker {
    protected _precacher: TileMaker;
    constructor(pixelsPerTile: number | undefined, pixelsPerCacheEdge: number | undefined, passes: ("depth" | "beauty" | "normals" | "customColor" | "customEmissive" | "customRoughnessMetalnessHeight" | "customTopDownHeight" | "pointLights")[] | undefined, indexedMeshMakers: (() => Object3D)[]);
    getTileId(tileDescription: Uint8Array): number;
}
