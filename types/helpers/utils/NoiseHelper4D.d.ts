import IHelper4D from './IHelper4D';
export default class NoiseHelper4D implements IHelper4D {
    private _scale;
    private _strength;
    private _offset;
    private _noise;
    constructor(_scale: number, seed?: number, _strength?: number, _offset?: number);
    getValue(x: number, y: number, z: number, w: number): number;
}
