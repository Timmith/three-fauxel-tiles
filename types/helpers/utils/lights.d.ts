import { Color, DirectionalLight, HemisphereLight, Scene } from 'three';
export type PrettyLightsOptions = {
    debugLights?: boolean;
};
export declare function addPrettyLights(scene: Scene, bgColor: Color, options?: PrettyLightsOptions): {
    sunLight: DirectionalLight;
    ambientLight: HemisphereLight;
};
