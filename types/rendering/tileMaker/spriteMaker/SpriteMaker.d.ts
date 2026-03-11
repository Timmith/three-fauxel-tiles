import { WebGLRenderer } from 'three';
import { MaterialPassType } from '../../../helpers/materials/materialLib';
import TileMaker from '../TileMaker';
export default class SpriteMaker extends TileMaker {
    private _angleRegistry;
    constructor(pixelsPerTile?: number, pixelsPerCacheEdge?: number, passes?: MaterialPassType[]);
    getTileId(tileDescription: Uint8Array): number;
    getTileIdAtAngle(tileDescription: Uint8Array, angle: number): number;
    render(renderer: WebGLRenderer): void;
}
