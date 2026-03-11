export default class NamedBitsInNumber<T extends readonly string[]> {
    value: number;
    private _names;
    constructor(value: number, _names: T);
    enableBit(name: T[number]): void;
    disableBit(name: T[number]): void;
    flipBit(name: T[number]): void;
    has(name: T[number]): boolean;
    hasFast(mask: number): boolean;
    hasAnyFast(masks: number[]): boolean;
    makeFastMask(name: T[number]): number;
    makeFastMultiMask(names: T[number][]): number;
    toString(): string;
    clone(): NamedBitsInNumber<T>;
}
