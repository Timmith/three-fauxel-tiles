import { Material, Object3D } from 'three';
export declare class BushProps {
    radius1: number;
    radius2: number;
    knobs: number;
    knobs2: number;
    y: number;
    constructor(radius1?: number, radius2?: number, knobs?: number, knobs2?: number, y?: number);
}
export declare function makeRecursiveBush(bushMat: Material, berryMat: Material, bushProps?: BushProps): Object3D<import("three").Event>;
