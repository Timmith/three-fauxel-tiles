import IHelper3D from './IHelper3D';
export default class LandscapeTileIndexRaw3D implements IHelper3D {
    private _rockDensityHelper;
    private _dirtHelper;
    private _userTiles;
    constructor();
    getValue(x: number, y: number, z: number): number;
    invalidate(x: number, y: number, z: number): void;
    setValue(x: number, y: number, z: number, value: number): void;
}
