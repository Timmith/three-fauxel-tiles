import { PerspectiveCamera } from 'three';
import type { CameraShaker } from './cameraShaker';
type UpdateManagerLike = {
    register(updater: {
        update(dt: number): void;
    }): void;
    unregister(updater: {
        update(dt: number): void;
    }): void;
};
export type FPSControlsOptions = {
    autoRegister?: boolean;
    cameraDamping?: number;
    cameraShaker?: CameraShaker;
    domElement?: HTMLElement;
    movementSpeed?: number;
    updateManager?: UpdateManagerLike;
};
export declare function setDefaultFPSControlsDomElement(domElement: HTMLElement | undefined): void;
export declare function getDefaultFPSControlsDomElement(): HTMLElement | undefined;
export declare class FPSControls {
    private _camera;
    private _options;
    private _active;
    private _cameraLocal;
    private _fpsController;
    private _registered;
    constructor(_camera: PerspectiveCamera, _options?: FPSControlsOptions);
    private get updateManager();
    private get lerpStrength();
    private ensureController;
    toggle(state?: boolean): void;
    update(): void;
    dispose(): void;
}
export default FPSControls;
