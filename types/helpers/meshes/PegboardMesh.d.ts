import { Mesh, Vector3 } from 'three';
export declare class PegboardMesh extends Mesh {
    playerCoord: Vector3;
    private _geo;
    constructor(densityResolver: (x: number, y: number, z: number) => number);
    update(): void;
}
