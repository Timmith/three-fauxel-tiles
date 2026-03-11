import IHelper3D from './IHelper3D';
export default class UserWrite3D implements IHelper3D {
    private _memory;
    getValue(x: number, y: number, z: number): number;
    setValue(x: number, y: number, z: number, value: number): void;
    invalidate(x: number, y: number, z: number): void;
}
