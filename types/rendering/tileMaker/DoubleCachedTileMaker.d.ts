import { Object3D } from 'three';
import { MaterialPassType } from '../../helpers/materials/materialLib';
import TileMaker from './TileMaker';
export default class DoubleCachedTileMaker extends TileMaker {
    protected _precacher: TileMaker;
    constructor(pixelsPerTile: number | undefined, pixelsPerCacheEdge: number | undefined, passes: MaterialPassType[] | undefined, indexedMeshMakers: (() => Object3D)[]);
    getTileId(tileDescription: Uint8Array): number;
}
