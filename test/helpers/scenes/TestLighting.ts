import {
  BoxGeometry,
  DirectionalLight,
  HemisphereLight,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  SphereGeometry,
  WebGLRenderer
} from 'three'
import {
  addPrettyLights,
  FPSControls,
  getUrlFlag,
  getUrlFloat
} from '@lib/legacy'

import BaseTestScene from './BaseTestScene'

export default class TestLightingScene extends BaseTestScene {
  protected sunLight: DirectionalLight
  protected ambientLight: HemisphereLight
  constructor(testShapes = true, testFloor = true) {
    super()
    const lights = addPrettyLights(this.scene, this.bgColor, {
      debugLights: getUrlFlag('debugLights')
    })
    this.sunLight = lights.sunLight
    this.ambientLight = lights.ambientLight
    const fps = new FPSControls(this.camera as PerspectiveCamera, {
      cameraDamping: getUrlFloat('camDamping', 0, 0, 0.999)
    })
    if (getUrlFlag('fpsCam')) {
      fps.toggle(true)
    }
    const init = () => {
      const unitSize = 0.6
      const radius = unitSize * 0.5
      const basicMaterial = new MeshStandardMaterial({
        color: 0xaaddee,
        roughness: 0.7
      })
      if (testFloor) {
        const floor = new Mesh(new PlaneGeometry(1, 1, 1, 1), basicMaterial)
        floor.scale.multiplyScalar(10)
        floor.castShadow = false
        floor.receiveShadow = true
        this.scene.add(floor)
        floor.rotation.x = Math.PI * -0.5
        floor.position.y = -0.001
      }
      if (testShapes) {
        const sphere = new Mesh(
          new SphereGeometry(radius, 32, 16),
          basicMaterial
        )
        sphere.castShadow = true
        sphere.receiveShadow = true
        sphere.position.x = -unitSize * 0.5
        sphere.position.y = radius
        sphere.name = 'Sphere'
        this.scene.add(sphere)
        const box = new Mesh(
          new BoxGeometry(unitSize, unitSize, unitSize),
          basicMaterial
        )
        box.castShadow = true
        box.receiveShadow = true
        box.position.x = unitSize * 0.5
        box.position.y = radius
        box.name = 'Cube'
        this.scene.add(box)
      }
    }
    init()
  }
  update(dt: number) {
    super.update(dt)
  }
  render(renderer: WebGLRenderer, dt: number) {
    super.render(renderer, dt)
  }
}
