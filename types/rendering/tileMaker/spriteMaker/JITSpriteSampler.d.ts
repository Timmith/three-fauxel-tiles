import { BufferGeometry } from 'three';
import NamedBitsInBytes from '../../../helpers/utils/NamedBitsInBytes';
import NamedBitsInNumber from '../../../helpers/utils/NamedBitsInNumber';
import SpriteMaker from './SpriteMaker';
declare type BottomAndTopIds = {
    idTop: number;
    idBottom: number;
};
declare const metaSpriteStrings: readonly ["body", "body2", "hat", "sword", "shield", "itemLog", "sheep", "skeleton", "wheelBarrow", "animRun", "animTime1", "animTime2", "animTime4"];
declare const visualSpriteStrings: readonly ["layer2", "body", "body2", "hat", "sword", "shield", "itemLog", "sheep", "sheepRun0", "sheepRun1", "sheepRun2", "sheepRun3", "sheepRun4", "sheepRun5", "sheepRun6", "sheepRun7", "skeleton", "skeletonRun0", "skeletonRun1", "skeletonRun2", "skeletonRun3", "skeletonRun4", "skeletonRun5", "skeletonRun6", "skeletonRun7", "wheelBarrow", "wheelBarrowRun0", "wheelBarrowRun1", "wheelBarrowRun2", "wheelBarrowRun3", "wheelBarrowRun4", "wheelBarrowRun5", "wheelBarrowRun6", "wheelBarrowRun7"];
export declare class SpriteController {
    x: number;
    y: number;
    id: number;
    angle: number;
    metaBytes: NamedBitsInNumber<typeof metaSpriteStrings>;
    private _animTime;
    get animTime(): number;
    set animTime(value: number);
    private _animFrame;
    get animFrame(): number;
    set animFrame(value: number);
    z: number;
    constructor(x: number, y: number, id: number, angle: number, metaBytes: NamedBitsInNumber<typeof metaSpriteStrings>);
}
export default class JITSpriteSampler {
    private _spriteMaker;
    private _pixelsPerTile;
    private _viewWidth;
    private _viewHeight;
    private _sprites;
    offsetX: number;
    offsetY: number;
    makeSprite(x: number, y: number, angle: number): SpriteController;
    get spriteMaker(): SpriteMaker;
    set spriteMaker(value: SpriteMaker);
    bytesPerTile: number;
    metaCache: Map<string, NamedBitsInNumber<typeof metaSpriteStrings>>;
    constructor(_spriteMaker: SpriteMaker, _pixelsPerTile: number, _viewWidth: number, _viewHeight: number);
    getMeta(id: number): NamedBitsInNumber<readonly ["body", "body2", "hat", "sword", "shield", "itemLog", "sheep", "skeleton", "wheelBarrow", "animRun", "animTime1", "animTime2", "animTime4"]>;
    validateMeta(val: NamedBitsInNumber<typeof metaSpriteStrings>): NamedBitsInNumber<readonly ["body", "body2", "hat", "sword", "shield", "itemLog", "sheep", "skeleton", "wheelBarrow", "animRun", "animTime1", "animTime2", "animTime4"]>;
    sampleVisProps(metaProps: NamedBitsInNumber<typeof metaSpriteStrings>): NamedBitsInBytes<readonly ["layer2", "body", "body2", "hat", "sword", "shield", "itemLog", "sheep", "sheepRun0", "sheepRun1", "sheepRun2", "sheepRun3", "sheepRun4", "sheepRun5", "sheepRun6", "sheepRun7", "skeleton", "skeletonRun0", "skeletonRun1", "skeletonRun2", "skeletonRun3", "skeletonRun4", "skeletonRun5", "skeletonRun6", "skeletonRun7", "wheelBarrow", "wheelBarrowRun0", "wheelBarrowRun1", "wheelBarrowRun2", "wheelBarrowRun3", "wheelBarrowRun4", "wheelBarrowRun5", "wheelBarrowRun6", "wheelBarrowRun7"]>;
    sampleVisIds(sprite: SpriteController, time?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'): BottomAndTopIds;
    sampleVisIdsByVisProps(visProps: NamedBitsInBytes<typeof visualSpriteStrings>, angle: number): BottomAndTopIds;
    updateVis(bottomPointsGeo: BufferGeometry, topPointsGeo: BufferGeometry): boolean;
}
export {};
