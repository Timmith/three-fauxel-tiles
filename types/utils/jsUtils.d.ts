export declare function boobyTrap<O, T extends keyof O>(obj: O, propName: T, optionalSetCondition?: (value: O[T]) => boolean, onGet?: boolean): void;
export declare const decorateMethodBefore: (obj: any, methodName: string, newMethod: (...args: any[]) => void) => () => void;
export declare const decorateMethodAfter: (obj: any, methodName: string, newMethod: (...args: any[]) => void) => () => void;
export declare function NOOP(): void;
export declare const iife: <T extends (...args: any[]) => any>(fn: T) => T;
export declare function notEmpty<TValue>(value: TValue | null | undefined): value is TValue;
export declare function copyDefaults(onto: any, from: any): void;
export declare function buildParameters<T>(defaults: T, options: Partial<T>): T;
export declare function defaultNumber(val: number | undefined, defVal: number): number;
export declare function lockProp(target: any, propName: string): void;
export declare function unlockProp(target: any, propName: string): void;
export declare function getRandomProperty(obj: any): any;
export declare function reverseLookupInMap<K, V>(map: Map<K, V>, val: V): K | undefined;
export declare class NamedJob {
    name: string;
    job: () => void;
    constructor(name: string, job: () => void);
}
