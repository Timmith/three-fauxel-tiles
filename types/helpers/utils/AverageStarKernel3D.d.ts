import IHelper3D from './IHelper3D';
export default class AverageStarKernal3D implements IHelper3D {
    private _helper;
    private _distance;
    constructor(_helper: IHelper3D, _distance?: number);
    getValue(x: number, y: number, z: number): number;
    setValue(x: number, y: number, z: number, value: number): void;
    invalidate(x: number, y: number, z: number): void;
}
