export { default as JITTileSampler } from './rendering/tileMaker/mapTileMaker/JITTileSampler'
export {
  default as MapTileMaker,
  mapTileVisualPropertyLookupStrings
} from './rendering/tileMaker/mapTileMaker/MapTileMaker'
export { default as MapScrollingView } from './helpers/utils/MapScrollingView'
export { default as TextureCachingScroller } from './rendering/TextureCachingScroller'
export { default as TileMaker } from './rendering/tileMaker/TileMaker'

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
export { LightController } from './mapCache/PointLightRenderer'
export { SpriteController } from './rendering/tileMaker/spriteMaker/JITSpriteSampler'
export { createMapCacheViewPlane } from './helpers/utils/createMapCacheViewPlane'

import JITTileSampler from './rendering/tileMaker/mapTileMaker/JITTileSampler'
import MapTileMaker from './rendering/tileMaker/mapTileMaker/MapTileMaker'
import MapScrollingView from './helpers/utils/MapScrollingView'
import TextureCachingScroller from './rendering/TextureCachingScroller'
import TileMaker from './rendering/tileMaker/TileMaker'
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
import { LightController } from './mapCache/PointLightRenderer'
import { SpriteController } from './rendering/tileMaker/spriteMaker/JITSpriteSampler'
import { createMapCacheViewPlane } from './helpers/utils/createMapCacheViewPlane'

export type CuratedMaterialType = CuratedMaterialTypeInternal
export type MaterialPassType = MaterialPassTypeInternal

export const geometry = {
  FibonacciSphereGeometry
}

export const helpers = {
  createMapCacheViewPlane
}

export const materials = {
  BasicFullScreenMaterial,
  SimplexNoiseMaterial,
  BasicTextureMaterial
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
  LightController,
  SpriteController,
  getMaterial: getMeshMaterial,
  getMeshMaterial,
  PegboardMesh,
  LandscapeTileIndex3D,
  Memoize3D,
  TILES,
  materials
}

export default legacyApi
