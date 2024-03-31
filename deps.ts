import * as colormath from "https://deno.land/x/colormath@1.2.4/mod.ts";
type ColorKey = 'r' | 'o' | 'y' | 'g' | 'c' | 'b' | 'm' | 'p';
type PaletteVariant = 'std' | 'light' | 'bg' | 'bgWeaker';
export type Palette<T> = Record<ColorKey, T>;
export type PaletteSet<T> = Record<PaletteVariant, Palette<T>>;
export type RGBColor = { r: number; g: number; b: number; };
export type RGBPalette = Palette<RGBColor>;
export type RGBPaletteSet = PaletteSet<RGBColor>;
export type HEXColor = `#${string}`;
export type HEXPalette = Palette<HEXColor>;
export type HEXPaletteSet = PaletteSet<HEXColor>;
//NHH: no hash hex
export type NHHColor = string;
export type NHHPalette = Palette<NHHColor>;
export type NHHPaletteSet = PaletteSet<NHHColor>;
export type LABColor = { l: number; a: number; b: number; };
export type LABPalette = Palette<LABColor>;
export type LABPaletteSet = PaletteSet<LABColor>;
export type LCHColor = { l: number; c: number; h: number; };
export type LCHPalette = Palette<LCHColor>;
export type LCHPaletteSet = PaletteSet<LCHColor>;
type ColorTransformFunction<InputColorType, OutputColorType> = (color: InputColorType) => OutputColorType;
export const hexToRgb = (hex: HEXColor): RGBColor => {
  const [r, g, b] = colormath.hex.toRgb(hex);
  return {r, g, b};
};
export const rgbToLab = (rgb: RGBColor): LABColor => {
  const [l, a, b] = colormath.rgb.toLab([rgb.r, rgb.g, rgb.b]);
  return { l, a, b };
};
export const labToLch = (lab: LABColor): LCHColor => {
  const [l, c, h] = colormath.lab.toLch([lab.l, lab.a, lab.b]);
  return { l, c, h };
};
export const lchToLab = (lch: LCHColor): LABColor => {
  const [l, a, b] = colormath.lch.toLab([lch.l, lch.c, lch.h]);
  return { l, a, b };
};
export const labToRgb = (lab: LABColor): RGBColor => {
  const [r, g, b] = colormath.lab.toRgb([lab.l, lab.a, lab.b]);
  return { r, g, b };
};
export const noHashHexToHEX = (color: NHHColor): HEXColor => `#${color}`;
export const hexToNoHashHex = (color: HEXColor): NHHColor => color.slice(1);
export const rgbToHex = (rgb: RGBColor): HEXColor => colormath.rgb.toHex([rgb.r, rgb.g, rgb.b]);
export const lchToHex = (lch: LCHColor): HEXColor => rgbToHex(labToRgb(lchToLab(lch)));
export const hexToLch = (hex: HEXColor): LCHColor => labToLch(rgbToLab(hexToRgb(hex)));
export const mixHexColor = (a: HEXColor, b: HEXColor, ratio: number) => colormath.mixColor(a, b, ratio).hex
export function transPalette<InputColorType, OutputColorType>(
  palette: Palette<InputColorType>,
  transformFn: ColorTransformFunction<InputColorType, OutputColorType>
): Palette<OutputColorType> {
  return Object.keys(palette).reduce((newPalette, colorKey) => {
    const key = colorKey as keyof typeof palette;
    newPalette[key] = transformFn(palette[key]);
    return newPalette;
  }, {} as Palette<OutputColorType>);
}
export function transPaletteSet<InputColorType, OutputColorType>(
  paletteSet: PaletteSet<InputColorType>,
  transformFn: ColorTransformFunction<InputColorType, OutputColorType>
): PaletteSet<OutputColorType> {
  return {
    std: transPalette(paletteSet.std, transformFn),
    light: transPalette(paletteSet.light, transformFn),
    bg: transPalette(paletteSet.bg, transformFn)
  };
}
