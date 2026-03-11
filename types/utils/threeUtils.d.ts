import { DataTexture, Texture } from 'three';
export declare function getTempTexture(): DataTexture;
export declare function getRandomTexture(width?: number, height?: number): DataTexture;
export declare function loadPixelatedTexture(path: string, flipY?: boolean): Promise<Texture<unknown>>;
export declare function getCanvasOfImageTexture(texture: Texture): CanvasRenderingContext2D;
