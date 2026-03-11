import type { PerspectiveCamera } from 'three'

declare class FPSCameraControllerCompat {
  onPointerLockAttainSignal: any
  onPointerLockReleaseSignal: any
  keyboard: any
  movementSpeed: number
  rotationSpeed: number
  update: () => void
  zoomSpeed: number
  constructor(camera: PerspectiveCamera, element: any, options?: any)
}

export default FPSCameraControllerCompat
