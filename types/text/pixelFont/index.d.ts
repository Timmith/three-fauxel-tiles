import PixelFontFace from './PixelFontFace';
import PixelTextMesh from './PixelTextMesh';
import { pixelTextSettings } from './PixelTextSettings';
export { PixelFontFace, PixelTextMesh, pixelTextSettings };
declare const _default: {
    PixelTextMesh: typeof PixelTextMesh;
    pixelTextSettings: {
        generic: import("./PixelTextSettings").PixelTextSettings;
        title: import("./PixelTextSettings").PixelTextSettings;
    };
    PixelFontFace: typeof PixelFontFace;
};
export default _default;
