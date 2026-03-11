import { PerspectiveCamera } from 'three'
import FPSController from './FPSCameraControllerCompat'

import { clamp, lerp } from './math'
import UpdateManager from './UpdateManager'
import type { CameraShaker } from './cameraShaker'

function copyCam(dst: PerspectiveCamera, src: PerspectiveCamera) {
  dst.position.copy(src.position)
  dst.scale.copy(src.scale)
  dst.quaternion.copy(src.quaternion)
  dst.fov = src.fov
  dst.aspect = src.aspect
  dst.near = src.near
  dst.far = src.far
  dst.updateProjectionMatrix()
}

type UpdateManagerLike = {
  register(updater: { update(dt: number): void }): void
  unregister(updater: { update(dt: number): void }): void
}

export type FPSControlsOptions = {
  autoRegister?: boolean
  cameraDamping?: number
  cameraShaker?: CameraShaker
  domElement?: HTMLElement
  movementSpeed?: number
  updateManager?: UpdateManagerLike
}

let defaultFPSControlsDomElement: HTMLElement | undefined

export function setDefaultFPSControlsDomElement(
  domElement: HTMLElement | undefined
) {
  defaultFPSControlsDomElement = domElement
}

export function getDefaultFPSControlsDomElement() {
  return defaultFPSControlsDomElement
}

export class FPSControls {
  private _active = false
  private _cameraLocal: PerspectiveCamera | undefined
  private _fpsController: FPSController | undefined = undefined
  private _registered = false

  constructor(
    private _camera: PerspectiveCamera,
    private _options: FPSControlsOptions = {}
  ) {
    //
  }

  private get updateManager() {
    return this._options.updateManager ?? UpdateManager
  }

  private get lerpStrength() {
    return 1 - clamp(this._options.cameraDamping ?? 0, 0, 0.999)
  }

  private ensureController() {
    if (this._fpsController) {
      return
    }
    const domElement =
      this._options.domElement ?? getDefaultFPSControlsDomElement()
    if (!domElement) {
      throw new Error(
        'FPSControls requires a domElement. Pass one in or call setDefaultFPSControlsDomElement().'
      )
    }
    if (!this._camera.parent) {
      throw new Error(
        'FPSControls requires the camera to be attached to a parent.'
      )
    }

    this._cameraLocal = new PerspectiveCamera()
    copyCam(this._cameraLocal, this._camera)
    this._camera.parent.add(this._cameraLocal)
    this._fpsController = new FPSController(this._cameraLocal, domElement, {
      movementSpeed: this._options.movementSpeed ?? 0.01
    })
    if (this._options.autoRegister !== false) {
      this.updateManager.register(this)
      this._registered = true
    }
  }

  toggle(state?: boolean) {
    if (state === undefined) {
      state = !this._active
    }
    this.ensureController()
    const fpsController = this._fpsController
    if (!fpsController) {
      throw new Error('FPSControls failed to initialize.')
    }
    const sig = fpsController.onPointerLockAttainSignal
    const origListener = sig._bindings[0]._listener
    sig._bindings[0]._listener = () => {
      if (this._active) {
        origListener()
      }
    }
    if (!state) {
      fpsController.onPointerLockReleaseSignal.dispatch()
    }
    // debugger
    this._active = state
  }

  update() {
    if (this._active && this._fpsController && this._cameraLocal) {
      const lerpStrength = this.lerpStrength
      this._fpsController.update()
      this._camera.position.lerp(this._cameraLocal.position, lerpStrength)
      this._camera.quaternion.slerp(this._cameraLocal.quaternion, lerpStrength)
      this._camera.scale.lerp(this._cameraLocal.scale, lerpStrength)
      // this._camera.matrix.copy(this._cameraLocal.matrix)
      this._camera.fov = lerp(
        this._camera.fov,
        this._cameraLocal.fov,
        lerpStrength
      )
      this._camera.updateProjectionMatrix()
      this._options.cameraShaker?.updateProjection()
    }
  }

  dispose() {
    if (this._fpsController) {
      this._fpsController.onPointerLockReleaseSignal.dispatch()
    }
    if (this._registered) {
      this.updateManager.unregister(this)
      this._registered = false
    }
    if (this._cameraLocal?.parent) {
      this._cameraLocal.parent.remove(this._cameraLocal)
    }
    this._cameraLocal = undefined
    this._fpsController = undefined
    this._active = false
  }
}

export default FPSControls
