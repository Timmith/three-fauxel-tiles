import IHelper3D from './IHelper3D';
export default class LandscapeTileIndex3D implements IHelper3D {
    private _tileHelper;
    constructor();
    getValue(x: number, y: number, z: number): number;
    invalidate(x: number, y: number, z: number): void;
    setValue(x: number, y: number, z: number, value: number): void;
}
