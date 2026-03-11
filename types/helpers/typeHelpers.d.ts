export declare function makeSafetyCheckFromConstStringArray<T extends {
    [index: number]: string;
}>(arr: Exclude<T, Array<string>>): (x: string) => x is Exclude<T, string[]>[number];
