import IHelper3D from './IHelper3D';
export default class NoiseHelper3D implements IHelper3D {
    private _scale;
    private _offsetX;
    private _offsetY;
    private _offsetZ;
    private _strength;
    private _offset;
    private _noise;
    constructor(_scale: number, _offsetX?: number, _offsetY?: number, _offsetZ?: number, seed?: number, _strength?: number, _offset?: number);
    getValue(x: number, y: number, z: number): number;
    invalidate(x: number, y: number, z: number): void;
    setValue(x: number, y: number, z: number, value: number): void;
}
