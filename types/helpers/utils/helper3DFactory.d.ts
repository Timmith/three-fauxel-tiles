import IHelper3D from './IHelper3D';
import StephHelper3D from './StepHelper3D';
export declare function simpleThreshNoise(scale: number, offsetX: number, offsetY: number, offsetZ: number, thresh: number, seed?: number, strength?: number): StephHelper3D;
export declare function wrapInMemoizedAverageStarKernels(core: IHelper3D, distances: number[]): IHelper3D;
export declare function wrapInMemoizedAverageBoxKernels(core: IHelper3D, distances: number[]): IHelper3D;
