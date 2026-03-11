export { default as JITTileSampler } from './rendering/tileMaker/mapTileMaker/JITTileSampler'
export {
  default as MapTileMaker,
  mapTileVisualPropertyLookupStrings
} from './rendering/tileMaker/mapTileMaker/MapTileMaker'
export type { MapTileMakerOptions } from './rendering/tileMaker/mapTileMaker/MapTileMaker'
export { loadJson, loadText, loadTexture } from './loaders/assetLoader'
export { default as MapScrollingView } from './helpers/utils/MapScrollingView'
export type { MapScrollingViewOptions } from './helpers/utils/MapScrollingView'
export { default as TextureCachingScroller } from './rendering/TextureCachingScroller'
export { default as TileMaker } from './rendering/tileMaker/TileMaker'
export {
  PixelFontFace,
  PixelTextMesh,
  pixelTextSettings
} from './text/pixelFont'
export {
  bindPerspectiveCameraToDevice,
  CameraShaker,
  createResponsiveCameraShaker,
  createResponsivePerspectiveCamera
} from './utils/cameraShaker'
export { getMouseBoundViewTransform } from './helpers/viewTransformMouse'
export { default as FPSControls } from './utils/fpsControls'
export {
  getDefaultFPSControlsDomElement,
  setDefaultFPSControlsDomElement
} from './utils/fpsControls'
export { default as KeyboardInput } from './input/KeyboardInput'
export {
  default as getKeyboardInput,
  rigToKeyboard
} from './input/getKeyboardInput'
export {
  getUrlColor,
  getUrlFlag,
  getUrlFloat,
  getUrlInt,
  getUrlParam
} from './utils/location'
export { getQuickKeyboardDirectionVector } from './input/directionalKeyboardInputHelper'
export { getQuickKeyboardDirectionElevation } from './input/elevationKeyboardInputHelper'

export { BasicFullScreenMaterial } from './materials/BasicFullScreenMaterial'
export { SimplexNoiseMaterial } from './materials/SimplexNoiseMaterial'
export { BasicTextureMaterial } from './materials/BasicTextureMaterial'
export { default as FibonacciSphereGeometry } from './geometries/FibonacciSphereGeometry'
export {
  getMeshMaterial,
  getMeshMaterial as getMaterial
} from './helpers/materials/materialLib'
export { PegboardMesh } from './helpers/meshes/PegboardMesh'
export { default as LandscapeTileIndex3D } from './helpers/utils/LandscapeTileIndex3D'
export { default as Memoize3D } from './helpers/utils/Memoize3D'
export { TILES } from './helpers/utils/tilesEnum'
export { addPrettyLights } from './helpers/utils/lights'
export type { PrettyLightsOptions } from './helpers/utils/lights'
export { LightController } from './mapCache/PointLightRenderer'
export { SpriteController } from './rendering/tileMaker/spriteMaker/JITSpriteSampler'
export { createMapCacheViewPlane } from './helpers/utils/createMapCacheViewPlane'
export {
  skeletonMaterialNames,
  wheelBarrowMaterialNames
} from './rendering/tileMaker/spriteMaker/materialNames'

import JITTileSampler from './rendering/tileMaker/mapTileMaker/JITTileSampler'
import { loadJson, loadText, loadTexture } from './loaders/assetLoader'
import MapTileMaker from './rendering/tileMaker/mapTileMaker/MapTileMaker'
import MapScrollingView from './helpers/utils/MapScrollingView'
import TextureCachingScroller from './rendering/TextureCachingScroller'
import TileMaker from './rendering/tileMaker/TileMaker'
import {
  PixelFontFace,
  PixelTextMesh,
  pixelTextSettings
} from './text/pixelFont'
import {
  bindPerspectiveCameraToDevice,
  CameraShaker,
  createResponsiveCameraShaker,
  createResponsivePerspectiveCamera
} from './utils/cameraShaker'
import { getMouseBoundViewTransform } from './helpers/viewTransformMouse'
import FPSControls, {
  getDefaultFPSControlsDomElement,
  setDefaultFPSControlsDomElement
} from './utils/fpsControls'
import KeyboardInput from './input/KeyboardInput'
import getKeyboardInput, { rigToKeyboard } from './input/getKeyboardInput'
import {
  getUrlColor,
  getUrlFlag,
  getUrlFloat,
  getUrlInt,
  getUrlParam
} from './utils/location'
import { getQuickKeyboardDirectionVector } from './input/directionalKeyboardInputHelper'
import { getQuickKeyboardDirectionElevation } from './input/elevationKeyboardInputHelper'
import { BasicFullScreenMaterial } from './materials/BasicFullScreenMaterial'
import { SimplexNoiseMaterial } from './materials/SimplexNoiseMaterial'
import { BasicTextureMaterial } from './materials/BasicTextureMaterial'
import FibonacciSphereGeometry from './geometries/FibonacciSphereGeometry'
import { getMeshMaterial } from './helpers/materials/materialLib'
import type {
  CuratedMaterialType as CuratedMaterialTypeInternal,
  MaterialPassType as MaterialPassTypeInternal
} from './helpers/materials/materialLib'
import { PegboardMesh } from './helpers/meshes/PegboardMesh'
import LandscapeTileIndex3D from './helpers/utils/LandscapeTileIndex3D'
import Memoize3D from './helpers/utils/Memoize3D'
import { TILES } from './helpers/utils/tilesEnum'
import { addPrettyLights } from './helpers/utils/lights'
import { LightController } from './mapCache/PointLightRenderer'
import { SpriteController } from './rendering/tileMaker/spriteMaker/JITSpriteSampler'
import { createMapCacheViewPlane } from './helpers/utils/createMapCacheViewPlane'
import {
  skeletonMaterialNames,
  wheelBarrowMaterialNames
} from './rendering/tileMaker/spriteMaker/materialNames'

export type CuratedMaterialType = CuratedMaterialTypeInternal
export type MaterialPassType = MaterialPassTypeInternal

export const geometry = {
  FibonacciSphereGeometry
}

export const helpers = {
  addPrettyLights,
  createMapCacheViewPlane,
  getMouseBoundViewTransform
}

export const materials = {
  BasicFullScreenMaterial,
  SimplexNoiseMaterial,
  BasicTextureMaterial
}

export const text = {
  PixelFontFace,
  PixelTextMesh,
  pixelTextSettings
}

export const input = {
  FPSControls,
  KeyboardInput,
  getDefaultFPSControlsDomElement,
  getKeyboardInput,
  rigToKeyboard,
  setDefaultFPSControlsDomElement,
  getQuickKeyboardDirectionVector,
  getQuickKeyboardDirectionElevation
}

export const camera = {
  bindPerspectiveCameraToDevice,
  CameraShaker,
  createResponsiveCameraShaker,
  createResponsivePerspectiveCamera
}

export const loaders = {
  loadJson,
  loadText,
  loadTexture
}

export const location = {
  getUrlColor,
  getUrlFlag,
  getUrlFloat,
  getUrlInt,
  getUrlParam
}

export const spriteMaterials = {
  skeletonMaterialNames,
  wheelBarrowMaterialNames
}

const legacyApi = {
  TileMaker,
  MapTileMaker,
  JITTileSampler,
  MapScrollingView,
  TextureCachingScroller,
  MaterialPassType: undefined as unknown as MaterialPassTypeInternal,
  geometry,
  helpers,
  loaders,
  location,
  LightController,
  SpriteController,
  getMaterial: getMeshMaterial,
  getMeshMaterial,
  PegboardMesh,
  LandscapeTileIndex3D,
  Memoize3D,
  TILES,
  materials,
  text,
  camera,
  input,
  bindPerspectiveCameraToDevice,
  CameraShaker,
  createResponsiveCameraShaker,
  createResponsivePerspectiveCamera,
  FPSControls,
  getDefaultFPSControlsDomElement,
  addPrettyLights,
  loadJson,
  loadText,
  loadTexture,
  getUrlColor,
  getUrlFlag,
  getUrlFloat,
  getUrlInt,
  getUrlParam,
  skeletonMaterialNames,
  wheelBarrowMaterialNames,
  getMouseBoundViewTransform,
  KeyboardInput,
  getKeyboardInput,
  rigToKeyboard,
  setDefaultFPSControlsDomElement,
  getQuickKeyboardDirectionVector,
  getQuickKeyboardDirectionElevation,
  PixelFontFace,
  PixelTextMesh,
  pixelTextSettings
}

export default legacyApi
