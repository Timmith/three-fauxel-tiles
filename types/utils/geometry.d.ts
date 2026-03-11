import { BufferGeometry, SphereBufferGeometry } from 'three';
export declare function getChamferedBoxGeometry(width: number, height: number, depth: number, chamfer?: number): SphereBufferGeometry;
export declare function getCachedChamferedBoxGeometry(width: number, height: number, depth: number, chamfer?: number, offsetX?: number, offsetY?: number, offsetZ?: number): BufferGeometry;
export declare function getCachedSphereGeometry(radius: number, segsX: number, segsY: number): SphereBufferGeometry;
export declare function getSharedRectangleGeometry(): BufferGeometry;
