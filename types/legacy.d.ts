export { default as JITTileSampler } from './rendering/tileMaker/mapTileMaker/JITTileSampler';
export { default as MapTileMaker, mapTileVisualPropertyLookupStrings } from './rendering/tileMaker/mapTileMaker/MapTileMaker';
export type { MapTileMakerOptions } from './rendering/tileMaker/mapTileMaker/MapTileMaker';
export { loadJson, loadText, loadTexture } from './loaders/assetLoader';
export { default as MapScrollingView } from './helpers/utils/MapScrollingView';
export type { MapScrollingViewOptions } from './helpers/utils/MapScrollingView';
export { default as TextureCachingScroller } from './rendering/TextureCachingScroller';
export { default as TileMaker } from './rendering/tileMaker/TileMaker';
export { PixelFontFace, PixelTextMesh, pixelTextSettings } from './text/pixelFont';
export { bindPerspectiveCameraToDevice, CameraShaker, createResponsiveCameraShaker, createResponsivePerspectiveCamera } from './utils/cameraShaker';
export { getMouseBoundViewTransform } from './helpers/viewTransformMouse';
export { default as FPSControls } from './utils/fpsControls';
export { getDefaultFPSControlsDomElement, setDefaultFPSControlsDomElement } from './utils/fpsControls';
export { default as KeyboardInput } from './input/KeyboardInput';
export { default as getKeyboardInput, rigToKeyboard } from './input/getKeyboardInput';
export { getUrlColor, getUrlFlag, getUrlFloat, getUrlInt, getUrlParam } from './utils/location';
export { getQuickKeyboardDirectionVector } from './input/directionalKeyboardInputHelper';
export { getQuickKeyboardDirectionElevation } from './input/elevationKeyboardInputHelper';
export { BasicFullScreenMaterial } from './materials/BasicFullScreenMaterial';
export { SimplexNoiseMaterial } from './materials/SimplexNoiseMaterial';
export { BasicTextureMaterial } from './materials/BasicTextureMaterial';
export { default as FibonacciSphereGeometry } from './geometries/FibonacciSphereGeometry';
export { getMeshMaterial, getMeshMaterial as getMaterial } from './helpers/materials/materialLib';
export { PegboardMesh } from './helpers/meshes/PegboardMesh';
export { default as LandscapeTileIndex3D } from './helpers/utils/LandscapeTileIndex3D';
export { default as Memoize3D } from './helpers/utils/Memoize3D';
export { TILES } from './helpers/utils/tilesEnum';
export { addPrettyLights } from './helpers/utils/lights';
export type { PrettyLightsOptions } from './helpers/utils/lights';
export { LightController } from './mapCache/PointLightRenderer';
export { SpriteController } from './rendering/tileMaker/spriteMaker/JITSpriteSampler';
export { createMapCacheViewPlane } from './helpers/utils/createMapCacheViewPlane';
export { skeletonMaterialNames, wheelBarrowMaterialNames } from './rendering/tileMaker/spriteMaker/materialNames';
import JITTileSampler from './rendering/tileMaker/mapTileMaker/JITTileSampler';
import { loadJson, loadText, loadTexture } from './loaders/assetLoader';
import MapTileMaker from './rendering/tileMaker/mapTileMaker/MapTileMaker';
import MapScrollingView from './helpers/utils/MapScrollingView';
import TextureCachingScroller from './rendering/TextureCachingScroller';
import TileMaker from './rendering/tileMaker/TileMaker';
import { PixelFontFace, PixelTextMesh } from './text/pixelFont';
import { bindPerspectiveCameraToDevice, CameraShaker, createResponsiveCameraShaker, createResponsivePerspectiveCamera } from './utils/cameraShaker';
import { getMouseBoundViewTransform } from './helpers/viewTransformMouse';
import FPSControls, { getDefaultFPSControlsDomElement, setDefaultFPSControlsDomElement } from './utils/fpsControls';
import KeyboardInput from './input/KeyboardInput';
import getKeyboardInput, { rigToKeyboard } from './input/getKeyboardInput';
import { getUrlColor, getUrlFlag, getUrlFloat, getUrlInt, getUrlParam } from './utils/location';
import { getQuickKeyboardDirectionVector } from './input/directionalKeyboardInputHelper';
import { getQuickKeyboardDirectionElevation } from './input/elevationKeyboardInputHelper';
import { BasicFullScreenMaterial } from './materials/BasicFullScreenMaterial';
import { SimplexNoiseMaterial } from './materials/SimplexNoiseMaterial';
import { BasicTextureMaterial } from './materials/BasicTextureMaterial';
import FibonacciSphereGeometry from './geometries/FibonacciSphereGeometry';
import { getMeshMaterial } from './helpers/materials/materialLib';
import type { CuratedMaterialType as CuratedMaterialTypeInternal, MaterialPassType as MaterialPassTypeInternal } from './helpers/materials/materialLib';
import { PegboardMesh } from './helpers/meshes/PegboardMesh';
import LandscapeTileIndex3D from './helpers/utils/LandscapeTileIndex3D';
import Memoize3D from './helpers/utils/Memoize3D';
import { TILES } from './helpers/utils/tilesEnum';
import { addPrettyLights } from './helpers/utils/lights';
import { LightController } from './mapCache/PointLightRenderer';
import { SpriteController } from './rendering/tileMaker/spriteMaker/JITSpriteSampler';
import { createMapCacheViewPlane } from './helpers/utils/createMapCacheViewPlane';
export type CuratedMaterialType = CuratedMaterialTypeInternal;
export type MaterialPassType = MaterialPassTypeInternal;
export declare const geometry: {
    FibonacciSphereGeometry: typeof FibonacciSphereGeometry;
};
export declare const helpers: {
    addPrettyLights: typeof addPrettyLights;
    createMapCacheViewPlane: typeof createMapCacheViewPlane;
    getMouseBoundViewTransform: typeof getMouseBoundViewTransform;
};
export declare const materials: {
    BasicFullScreenMaterial: typeof BasicFullScreenMaterial;
    SimplexNoiseMaterial: typeof SimplexNoiseMaterial;
    BasicTextureMaterial: typeof BasicTextureMaterial;
};
export declare const text: {
    PixelFontFace: typeof PixelFontFace;
    PixelTextMesh: typeof PixelTextMesh;
    pixelTextSettings: {
        generic: import("./text/pixelFont/PixelTextSettings").PixelTextSettings;
        title: import("./text/pixelFont/PixelTextSettings").PixelTextSettings;
    };
};
export declare const input: {
    FPSControls: typeof FPSControls;
    KeyboardInput: typeof KeyboardInput;
    getDefaultFPSControlsDomElement: typeof getDefaultFPSControlsDomElement;
    getKeyboardInput: typeof getKeyboardInput;
    rigToKeyboard: typeof rigToKeyboard;
    setDefaultFPSControlsDomElement: typeof setDefaultFPSControlsDomElement;
    getQuickKeyboardDirectionVector: typeof getQuickKeyboardDirectionVector;
    getQuickKeyboardDirectionElevation: typeof getQuickKeyboardDirectionElevation;
};
export declare const camera: {
    bindPerspectiveCameraToDevice: typeof bindPerspectiveCameraToDevice;
    CameraShaker: typeof CameraShaker;
    createResponsiveCameraShaker: typeof createResponsiveCameraShaker;
    createResponsivePerspectiveCamera: typeof createResponsivePerspectiveCamera;
};
export declare const loaders: {
    loadJson: typeof loadJson;
    loadText: typeof loadText;
    loadTexture: typeof loadTexture;
};
export declare const location: {
    getUrlColor: typeof getUrlColor;
    getUrlFlag: typeof getUrlFlag;
    getUrlFloat: typeof getUrlFloat;
    getUrlInt: typeof getUrlInt;
    getUrlParam: typeof getUrlParam;
};
export declare const spriteMaterials: {
    skeletonMaterialNames: {
        readonly skin: "bone";
        readonly black: "pitchBlack";
        readonly pants: "pants";
    };
    wheelBarrowMaterialNames: {
        readonly wood: "wood";
        readonly wood2: "woodMaple";
    };
};
declare const legacyApi: {
    TileMaker: typeof TileMaker;
    MapTileMaker: typeof MapTileMaker;
    JITTileSampler: typeof JITTileSampler;
    MapScrollingView: typeof MapScrollingView;
    TextureCachingScroller: typeof TextureCachingScroller;
    MaterialPassType: MaterialPassTypeInternal;
    geometry: {
        FibonacciSphereGeometry: typeof FibonacciSphereGeometry;
    };
    helpers: {
        addPrettyLights: typeof addPrettyLights;
        createMapCacheViewPlane: typeof createMapCacheViewPlane;
        getMouseBoundViewTransform: typeof getMouseBoundViewTransform;
    };
    loaders: {
        loadJson: typeof loadJson;
        loadText: typeof loadText;
        loadTexture: typeof loadTexture;
    };
    location: {
        getUrlColor: typeof getUrlColor;
        getUrlFlag: typeof getUrlFlag;
        getUrlFloat: typeof getUrlFloat;
        getUrlInt: typeof getUrlInt;
        getUrlParam: typeof getUrlParam;
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
    text: {
        PixelFontFace: typeof PixelFontFace;
        PixelTextMesh: typeof PixelTextMesh;
        pixelTextSettings: {
            generic: import("./text/pixelFont/PixelTextSettings").PixelTextSettings;
            title: import("./text/pixelFont/PixelTextSettings").PixelTextSettings;
        };
    };
    camera: {
        bindPerspectiveCameraToDevice: typeof bindPerspectiveCameraToDevice;
        CameraShaker: typeof CameraShaker;
        createResponsiveCameraShaker: typeof createResponsiveCameraShaker;
        createResponsivePerspectiveCamera: typeof createResponsivePerspectiveCamera;
    };
    input: {
        FPSControls: typeof FPSControls;
        KeyboardInput: typeof KeyboardInput;
        getDefaultFPSControlsDomElement: typeof getDefaultFPSControlsDomElement;
        getKeyboardInput: typeof getKeyboardInput;
        rigToKeyboard: typeof rigToKeyboard;
        setDefaultFPSControlsDomElement: typeof setDefaultFPSControlsDomElement;
        getQuickKeyboardDirectionVector: typeof getQuickKeyboardDirectionVector;
        getQuickKeyboardDirectionElevation: typeof getQuickKeyboardDirectionElevation;
    };
    bindPerspectiveCameraToDevice: typeof bindPerspectiveCameraToDevice;
    CameraShaker: typeof CameraShaker;
    createResponsiveCameraShaker: typeof createResponsiveCameraShaker;
    createResponsivePerspectiveCamera: typeof createResponsivePerspectiveCamera;
    FPSControls: typeof FPSControls;
    getDefaultFPSControlsDomElement: typeof getDefaultFPSControlsDomElement;
    addPrettyLights: typeof addPrettyLights;
    loadJson: typeof loadJson;
    loadText: typeof loadText;
    loadTexture: typeof loadTexture;
    getUrlColor: typeof getUrlColor;
    getUrlFlag: typeof getUrlFlag;
    getUrlFloat: typeof getUrlFloat;
    getUrlInt: typeof getUrlInt;
    getUrlParam: typeof getUrlParam;
    skeletonMaterialNames: {
        readonly skin: "bone";
        readonly black: "pitchBlack";
        readonly pants: "pants";
    };
    wheelBarrowMaterialNames: {
        readonly wood: "wood";
        readonly wood2: "woodMaple";
    };
    getMouseBoundViewTransform: typeof getMouseBoundViewTransform;
    KeyboardInput: typeof KeyboardInput;
    getKeyboardInput: typeof getKeyboardInput;
    rigToKeyboard: typeof rigToKeyboard;
    setDefaultFPSControlsDomElement: typeof setDefaultFPSControlsDomElement;
    getQuickKeyboardDirectionVector: typeof getQuickKeyboardDirectionVector;
    getQuickKeyboardDirectionElevation: typeof getQuickKeyboardDirectionElevation;
    PixelFontFace: typeof PixelFontFace;
    PixelTextMesh: typeof PixelTextMesh;
    pixelTextSettings: {
        generic: import("./text/pixelFont/PixelTextSettings").PixelTextSettings;
        title: import("./text/pixelFont/PixelTextSettings").PixelTextSettings;
    };
};
export default legacyApi;
