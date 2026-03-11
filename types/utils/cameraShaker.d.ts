import { PerspectiveCamera } from 'three';
type DeviceAdapter = {
    aspect: number;
    isMobile: boolean;
    onChange(listener: () => void, firstOneForFree?: boolean): () => void;
};
export type ResponsivePerspectiveCameraOptions = {
    device?: DeviceAdapter;
    far?: number;
    fov?: number;
    mobileFov?: number;
    near?: number;
};
export declare class CameraShaker {
    camera: PerspectiveCamera;
    private set shakeStrength(value);
    set shakeScale(value: number);
    shakyCamera: PerspectiveCamera;
    private _time;
    private _timers;
    private _shakeStrength;
    private _shakeScale;
    constructor(camera: PerspectiveCamera);
    updateProjection(): void;
    update(dt: number): void;
    add(duration: number): void;
}
export declare function bindPerspectiveCameraToDevice(camera: PerspectiveCamera, { device: boundDevice, fov, mobileFov }?: ResponsivePerspectiveCameraOptions): () => void;
export declare function createResponsivePerspectiveCamera({ device: boundDevice, far, fov, mobileFov, near }?: ResponsivePerspectiveCameraOptions): PerspectiveCamera;
export declare function createResponsiveCameraShaker(options?: ResponsivePerspectiveCameraOptions): CameraShaker;
export {};
