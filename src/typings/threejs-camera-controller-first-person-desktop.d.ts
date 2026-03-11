import type { PerspectiveCamera } from 'three'

declare module 'threejs-camera-controller-first-person-desktop' {
  class FPSController {
    onPointerLockAttainSignal: any
    onPointerLockReleaseSignal: any
    update: () => void
    constructor(camera: PerspectiveCamera, element: any, options: any)
  }
  export default FPSController
}
