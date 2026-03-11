import { Material, MeshStandardMaterialParameters, Object3D } from 'three';
export declare const CuratedMaterialTypeStrings: readonly ["invisible", "ironBlack", "ground", "brick", "gold", "silver", "iron", "copper", "mortar", "drywall", "floor", "wood", "woodMaple", "bark", "barkMaple", "skin", "plastic", "grass", "bush", "leafMaple", "pineNeedle", "berry", "pants", "pantsRed", "rock", "cyberGlow", "cyberPanel", "water", "fleeceWhite", "fleeceBlack", "sheepNose", "shinyBlack", "pitchBlack", "zombieSkin", "bone", "snow"];
export declare type CuratedMaterialType = typeof CuratedMaterialTypeStrings[number];
export declare const isCuratedMaterial: (x: string) => x is "invisible" | "ironBlack" | "ground" | "brick" | "gold" | "silver" | "iron" | "copper" | "mortar" | "drywall" | "floor" | "wood" | "woodMaple" | "bark" | "barkMaple" | "skin" | "plastic" | "grass" | "bush" | "leafMaple" | "pineNeedle" | "berry" | "pants" | "pantsRed" | "rock" | "cyberGlow" | "cyberPanel" | "water" | "fleeceWhite" | "fleeceBlack" | "sheepNose" | "shinyBlack" | "pitchBlack" | "zombieSkin" | "bone" | "snow";
declare const MaterialPassTypeStrings: readonly ["beauty", "normals", "depth", "customColor", "customEmissive", "customRoughnessMetalnessHeight", "customTopDownHeight", "pointLights"];
export declare type MaterialPassType = typeof MaterialPassTypeStrings[number];
export declare const isMaterialPass: (x: string) => x is "depth" | "beauty" | "normals" | "customColor" | "customEmissive" | "customRoughnessMetalnessHeight" | "customTopDownHeight" | "pointLights";
export declare const standardMaterialParamLib: {
    [K in CuratedMaterialType]: MeshStandardMaterialParameters;
};
export declare function getMeshMaterial(name: CuratedMaterialType, pass?: MaterialPassType): Material;
export declare function changeMeshMaterials(node: Object3D, pass: MaterialPassType, visibleOnly?: boolean): void;
export {};
