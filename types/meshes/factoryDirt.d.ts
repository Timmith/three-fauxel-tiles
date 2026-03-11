import { Object3D } from 'three';
import { Material } from 'three';
import NamedBitsInNumber from '../helpers/utils/NamedBitsInNumber';
export declare const CardinalStrings: readonly ["c", "nw", "n", "ne", "e", "se", "s", "sw", "w"];
export declare function makeDirtQuad(id: number, quad: boolean[], mat: Material): Object3D<import("three").Object3DEventMap>;
export declare function makeDirt(mat: Material, around: NamedBitsInNumber<typeof CardinalStrings>): Object3D<import("three").Object3DEventMap>;
