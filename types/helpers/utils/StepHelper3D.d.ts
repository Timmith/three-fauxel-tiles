import IHelper3D from './IHelper3D';
export default class StepHelper3D implements IHelper3D {
    private _helper;
    private _thresh;
    constructor(_helper: IHelper3D, _thresh?: number);
    getValue(x: number, y: number, z: number): 1 | 0;
    setValue(x: number, y: number, z: number, value: number): void;
    invalidate(x: number, y: number, z: number): void;
}
