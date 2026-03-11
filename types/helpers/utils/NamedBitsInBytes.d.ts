export default class NamedBitsInBytes<T extends readonly string[]> {
    bytes: Uint8Array;
    private _names;
    constructor(bytes: Uint8Array, _names: T);
    enableBit(name: T[number]): void;
    disableBit(name: T[number]): void;
    flipBit(name: T[number]): void;
    has(name: T[number]): boolean;
    toString(): string;
}
