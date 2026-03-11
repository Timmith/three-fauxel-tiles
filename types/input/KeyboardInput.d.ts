import { KeyboardCodes } from '../utils/KeyboardCodes';
export type KeyCodeListener = (code: KeyboardCodes, down: boolean) => void;
export default class KeyboardInput {
    private _preventDefault;
    private _listeners;
    private _keyStates;
    constructor(_preventDefault?: boolean);
    addListener(listener: KeyCodeListener): void;
    removeListener(listener: KeyCodeListener): void;
    private onKeyEvent;
}
