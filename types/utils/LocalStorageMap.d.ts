export default class LocalStorageMap<K extends string, V> extends Map {
    private _hydrator;
    private _dehydrator;
    constructor(_hydrator: (val: string) => V, _dehydrator: (val: V) => string);
    has(key: K): boolean;
    get(key: K): any;
    set(key: K, value: V): this;
    delete(key: K): boolean;
}
