import { BufferGeometry, SphereGeometry } from 'three';
export declare function getChamferedBoxGeometry(width: number, height: number, depth: number, chamfer?: number): SphereGeometry;
export declare function getCachedChamferedBoxGeometry(width: number, height: number, depth: number, chamfer?: number, offsetX?: number, offsetY?: number, offsetZ?: number): BufferGeometry<import("three").NormalBufferAttributes, import("three").BufferGeometryEventMap>;
export declare function getCachedSphereGeometry(radius: number, segsX: number, segsY: number): SphereGeometry;
export declare function getSharedRectangleGeometry(): BufferGeometry<import("three").NormalBufferAttributes, import("three").BufferGeometryEventMap>;
