import {
  JITTileSampler,
  MapScrollingView,
  MapTileMaker,
  addPrettyLights
} from 'three-fauxel-tiles'
import { Color, PerspectiveCamera, Scene, Vector4, WebGLRenderer } from 'three'

export function mountFauxelView(container: HTMLElement) {
  const renderer = new WebGLRenderer({ antialias: false, alpha: false })
  renderer.setSize(container.clientWidth, container.clientHeight)
  container.appendChild(renderer.domElement)

  const scene = new Scene()
  const camera = new PerspectiveCamera(
    40,
    container.clientWidth / container.clientHeight,
    0.1,
    100
  )
  camera.position.set(0, 2.5, 6)

  addPrettyLights(scene, new Color(0x6f84bc))

  const mapViewUvST = new Vector4(1, 1, 0, 0)
  const pixelOffsetUvST = new Vector4(1, 1, 0, 0)
  const view = new MapScrollingView(
    16,
    16,
    32,
    2048,
    mapViewUvST,
    pixelOffsetUvST,
    false,
    undefined,
    {
      tileMaker: {
        snow: false
      },
      useOutlines: true
    }
  )

  scene.add(view.mapCacheFinalView)

  const tileMaker = new MapTileMaker(32, 2048)
  const jitTiles = new JITTileSampler(tileMaker, 16, 16)
  jitTiles.offsetX = 0
  jitTiles.offsetY = 0

  let previousTime = performance.now()

  function frame(now: number) {
    const dt = (now - previousTime) / 1000
    previousTime = now
    view.render(renderer, dt)
    renderer.render(scene, camera)
    requestAnimationFrame(frame)
  }

  requestAnimationFrame(frame)

  return {
    camera,
    jitTiles,
    renderer,
    scene,
    tileMaker,
    view
  }
}
