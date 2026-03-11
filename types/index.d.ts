import JITTileSampler from './rendering/tileMaker/mapTileMaker/JITTileSampler';
import MapTileMaker from './rendering/tileMaker/mapTileMaker/MapTileMaker';
import MapScrollingView from './helpers/utils/MapScrollingView';
import TextureCachingScroller from './rendering/TextureCachingScroller';
import TileMaker from './rendering/tileMaker/TileMaker';
import { BasicFullScreenMaterial } from './materials/BasicFullScreenMaterial';
import { SimplexNoiseMaterial } from './materials/SimplexNoiseMaterial';
import { BasicTextureMaterial } from './materials/BasicTextureMaterial';
import FibonacciSphereGeometry from './geometries/FibonacciSphereGeometry';
import { getMeshMaterial } from './helpers/materials/materialLib';
import { PegboardMesh } from './helpers/meshes/PegboardMesh';
import LandscapeTileIndex3D from './helpers/utils/LandscapeTileIndex3D';
import Memoize3D from './helpers/utils/Memoize3D';
import { TILES } from './helpers/utils/tilesEnum';
import { LightController } from './mapCache/PointLightRenderer';
import { SpriteController } from './rendering/tileMaker/spriteMaker/JITSpriteSampler';
import { createMapCacheViewPlane } from './helpers/utils/createMapCacheViewPlane';
declare const _default: {
    TileMaker: typeof TileMaker;
    MapTileMaker: typeof MapTileMaker;
    JITTileSampler: typeof JITTileSampler;
    MapScrollingView: typeof MapScrollingView;
    TextureCachingScroller: typeof TextureCachingScroller;
    geometry: {
        FibonacciSphereGeometry: typeof FibonacciSphereGeometry;
    };
    helpers: {
        createMapCacheViewPlane: typeof createMapCacheViewPlane;
    };
    LightController: typeof LightController;
    SpriteController: typeof SpriteController;
    getMaterial: typeof getMeshMaterial;
    getMeshMaterial: typeof getMeshMaterial;
    PegboardMesh: typeof PegboardMesh;
    LandscapeTileIndex3D: typeof LandscapeTileIndex3D;
    Memoize3D: typeof Memoize3D;
    TILES: typeof TILES;
    materials: {
        BasicFullScreenMaterial: typeof BasicFullScreenMaterial;
        SimplexNoiseMaterial: typeof SimplexNoiseMaterial;
        BasicTextureMaterial: typeof BasicTextureMaterial;
    };
};
export default _default;
