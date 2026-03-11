import {
  LightController,
  MapScrollingView,
  SpriteController
} from 'three-fauxel-tiles/rendering'
import { Color, PerspectiveCamera, Scene, Vector4, WebGLRenderer } from 'three'

export function createRenderableWorld(container: HTMLElement) {
  const renderer = new WebGLRenderer({ antialias: false })
  renderer.setSize(container.clientWidth, container.clientHeight)
  container.appendChild(renderer.domElement)

  const scene = new Scene()
  const camera = new PerspectiveCamera(
    45,
    container.clientWidth / container.clientHeight,
    0.1,
    100
  )
  camera.position.set(0, 2, 5)

  const uvST = new Vector4(1, 1, 0, 0)
  const view = new MapScrollingView(16, 16, 32, 2048, uvST, uvST, false)
  scene.add(view.mapCacheFinalView)

  const sheep: SpriteController = view.jitSpriteSampler.makeSprite(6, 6, 0)
  sheep.metaBytes.enableBit('sheep')
  sheep.animTime = 0.25

  const lightGroup = view.pointLightRenderer.getLightGroup(true, 128)
  const warmLamp: LightController = lightGroup.makeLight(
    7,
    7,
    0.2,
    3,
    new Color(0xffaa55)
  )

  let previousTime = performance.now()

  function frame(now: number) {
    const dt = (now - previousTime) / 1000
    previousTime = now

    sheep.animTime += dt
    warmLamp.x = 7 + Math.cos(now * 0.001) * 0.5
    warmLamp.y = 7 + Math.sin(now * 0.001) * 0.5

    view.render(renderer, dt)
    renderer.render(scene, camera)
    requestAnimationFrame(frame)
  }

  requestAnimationFrame(frame)

  return {
    camera,
    renderer,
    scene,
    sheep,
    view,
    warmLamp
  }
}
