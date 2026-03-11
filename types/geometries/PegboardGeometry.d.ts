import { BufferGeometry, Vector2, Vector3 } from 'three';
export default class PegboardGeometry extends BufferGeometry {
    playerCoord: Vector3;
    smoothOffset: Vector2;
    update: () => void;
    constructor(indexResolver?: (x: number, y: number, z: number) => number);
}
