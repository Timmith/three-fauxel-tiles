import { Color, Timer, Vector3 } from 'three'
import { createResponsiveCameraShaker } from '@lib/legacy'

import BaseTestScene from './helpers/scenes/BaseTestScene'
import renderer from './renderer'
import { testClasses } from './tests'
import { timeFractUniform, timeUniform } from './uniforms'
import { nextFrameUpdate } from './utils/onNextFrame'
import UpdateManager from './utils/UpdateManager'

import { getUrlParam } from '@lib/legacy'

document.addEventListener('gesturestart', (e) => e.preventDefault()) // disable zooming on mobile

const timer = new Timer()
timer.connect(document)
renderer.setClearColor(new Color(0x344556), 1.0)
const cameraShaker = createResponsiveCameraShaker()
UpdateManager.register(cameraShaker)
cameraShaker.camera.position.set(0, 0.5, 0.5)
cameraShaker.camera.lookAt(new Vector3())

let TestClass: new () => BaseTestScene = BaseTestScene
const testParam = getUrlParam('test') || 'pixelText'
if (testClasses.hasOwnProperty(testParam)) {
  TestClass = testClasses[testParam]
}
const __useFixedStep = true
const __fixedSimStep = 1 / 60

setTimeout(() => {
  const test: BaseTestScene = new TestClass()

  const nthFrameSim: number = parseInt(getUrlParam('nthFrameSim') || '1')
  const nthFrameRender: number = parseInt(getUrlParam('nthFrameRender') || '1')
  let frameCounter = 0
  let simDt = 0
  let renderDt = 0
  const loop = (timestamp?: number) => {
    frameCounter++
    timer.update(timestamp)
    const dt = Math.min(timer.getDelta(), 0.1)
    simDt += dt
    renderDt += dt

    nextFrameUpdate()
    timeUniform.value += dt
    timeFractUniform.value = (timeFractUniform.value + dt) % 1

    if (frameCounter % nthFrameSim === 0) {
      if (__useFixedStep) {
        while (simDt > __fixedSimStep) {
          UpdateManager.update(__fixedSimStep)
          test.update(__fixedSimStep)
          simDt -= __fixedSimStep
        }
      } else {
        UpdateManager.update(simDt)
        test.update(simDt)
        simDt = 0
      }
    }

    if (frameCounter % nthFrameRender === 0) {
      test.render(renderer, renderDt)
      renderDt = 0
    }

    requestAnimationFrame(loop)
  }

  // Start loop
  requestAnimationFrame(loop)
}, 1000)
