import Keyboard from 'game-keyboard'
import keyMaps from 'game-keyboard/key_map'
import PointerTrap from 'pointer-trap-relative'
import MouseWheel from 'input-mousewheel'
import defined from 'defined'

const keyMap = keyMaps.US

export default class FPSCameraControllerCompat {
  constructor(camera, element, options = {}) {
    this._camera = camera
    this._keyboard = new Keyboard(keyMap)
    this._mouseWheel = new MouseWheel(element)

    this._onChangedCallback = options.onChangedCallback
    this._movementSpeed = defined(options.movementSpeed, 0.1)
    this._movementRunSpeedScale = defined(options.movementRunSpeedScale, 2.5)
    this._rotationSpeed = defined(options.rotationSpeed, 0.005)
    this._minFov = defined(options.minFov, 10)
    this._maxFov = defined(options.maxFov, 100)
    this._zoomSpeed = defined(options.zoomSpeed, 0.001)
    this._yUp = defined(options.yUp, true)
    this._rotateActive = defined(options.rotateActive, false)
    this._rotateActiveOnlyInPointerLock = defined(
      options.rotateActiveOnlyInPointerLock,
      true
    )
    this._arrowKeysRotate = defined(options.arrowKeysRotate, false)
    this._movementSpeedScale = 1
    this._rotated = false
    this._moved = false
    this._lookAtTarget = this._yUp ? this._camera.clone() : undefined

    if (!this._rotateActiveOnlyInPointerLock) {
      this._rotateActive = true
    }

    this._pointerTrap = new PointerTrap(element)
    this._pointerTrap.on('data', (pos) => {
      if (this._rotateActive) {
        this._camera.rotateY(pos.x * -this._rotationSpeed)
        this._camera.rotateX(pos.y * -this._rotationSpeed)
        if (this._yUp) {
          this.uprightCamera()
        }
        this._rotated = true
      }
    })

    this._pointerTrap.onAttainSignal.add(() => {
      if (this._rotateActiveOnlyInPointerLock) {
        this._rotateActive = true
      }
    })
    this._pointerTrap.onReleaseSignal.add(() => {
      if (this._rotateActiveOnlyInPointerLock) {
        this._rotateActive = false
      }
    })

    this.onPointerLockAttainSignal = this._pointerTrap.onAttainSignal
    this.onPointerLockReleaseSignal = this._pointerTrap.onReleaseSignal

    this._mouseWheel.onWheelSignal.add((val) => {
      const zoom = val * this._zoomSpeed
      let fov = this._camera.fov
      fov *= 1 + zoom
      fov = Math.min(this._maxFov, Math.max(this._minFov, fov))
      this._camera.fov = fov
      this._camera.updateProjectionMatrix()
      if (this._onChangedCallback) {
        this._onChangedCallback()
      }
    })
  }

  uprightCamera() {
    if (!this._lookAtTarget) {
      return
    }
    this._lookAtTarget.position.copy(this._camera.position)
    this._lookAtTarget.rotation.copy(this._camera.rotation)
    this._lookAtTarget.translateZ(-1)
    this._camera.lookAt(this._lookAtTarget.position)
  }

  update() {
    if (this._keyboard.isPressed('shift')) {
      this._movementSpeedScale = this._movementRunSpeedScale
    } else {
      this._movementSpeedScale = 1
    }
    if (this._keyboard.isPressed('a')) {
      this._moved = true
      this._camera.translateX(-this._movementSpeed * this._movementSpeedScale)
    }
    if (this._keyboard.isPressed('d')) {
      this._moved = true
      this._camera.translateX(this._movementSpeed * this._movementSpeedScale)
    }
    if (this._keyboard.isPressed('w')) {
      this._moved = true
      this._camera.translateZ(-this._movementSpeed * this._movementSpeedScale)
    }
    if (this._keyboard.isPressed('s')) {
      this._moved = true
      this._camera.translateZ(this._movementSpeed * this._movementSpeedScale)
    }
    if (this._keyboard.isPressed('e')) {
      this._moved = true
      this._camera.position.y += this._movementSpeed * this._movementSpeedScale
    }
    if (this._keyboard.isPressed('q')) {
      this._moved = true
      this._camera.position.y += -this._movementSpeed * this._movementSpeedScale
    }
    if (this._arrowKeysRotate) {
      if (this._keyboard.isPressed('left')) {
        this._camera.rotateY(this._rotationSpeed)
        this._rotated = true
      }
      if (this._keyboard.isPressed('right')) {
        this._camera.rotateY(-this._rotationSpeed)
        this._rotated = true
      }
      if (this._keyboard.isPressed('up')) {
        this._camera.rotateX(this._rotationSpeed)
        this._rotated = true
      }
      if (this._keyboard.isPressed('down')) {
        this._camera.rotateX(-this._rotationSpeed)
        this._rotated = true
      }
      if (this._rotated && this._yUp) {
        this.uprightCamera()
      }
    }
    if ((this._moved || this._rotated) && this._onChangedCallback) {
      this._onChangedCallback()
      this._moved = false
      this._rotated = false
    }
  }

  get keyboard() {
    return this._keyboard
  }

  get movementSpeed() {
    return this._movementSpeed
  }

  set movementSpeed(value) {
    this._movementSpeed = value
  }

  get rotationSpeed() {
    return this._rotationSpeed
  }

  set rotationSpeed(value) {
    this._rotationSpeed = value
  }

  get zoomSpeed() {
    return this._zoomSpeed
  }

  set zoomSpeed(value) {
    this._zoomSpeed = value
  }
}
