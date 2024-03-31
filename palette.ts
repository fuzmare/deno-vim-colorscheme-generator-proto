import {
  HEXColor,
  HEXPaletteSet,
  LCHColor,
  LCHPalette,
  LCHPaletteSet,
  lchToHex,
  hexToLch,
  mixHexColor,
  transPalette,
} from "./deps.ts"

function lightPalette(palette: LCHPalette): LCHPalette {
  return Object.keys(palette).reduce((newPalette, colorKey) => {
    const key = colorKey as keyof typeof palette;
    newPalette[key] = {
      l: palette[key].l + 12,
      c: palette[key].c * 0.85,
      h: palette[key].h
    };
    return newPalette;
  }, {} as LCHPalette);
}

function bgPalette(palette: LCHPalette, bg: LCHColor, cRatio: number, opacity: number): LCHPalette {
  return Object.keys(palette).reduce((newPalette, colorKey) => {
    const key = colorKey as keyof typeof palette;
    newPalette[key] = hexToLch(mixHexColor(lchToHex(bg), lchToHex({ l: palette[key].l, c: palette[key].c * cRatio, h: palette[key].h } as LCHColor), opacity));
    return newPalette;
  }, {} as LCHPalette);
}

const bgLCH: LCHColor = {
  l: 11,
  c: 0,
  h: 0
}
export const bgHEX = lchToHex(bgLCH);

const baseL = 58
const baseC = 38

const stdPaletteLCH: LCHPalette = {
  r: { l: baseL - 8, c: baseC + 35, h:   0 + 10 },
  o: { l: baseL + 4, c: baseC +  7, h:  30 + 10 },
  y: { l: baseL + 9, c: baseC +  4, h:  60 + 15 },
  g: { l: baseL + 7, c: baseC +  5, h: 120 + 40 },
  c: { l: baseL + 7, c: baseC +  5, h: 180 + 25 },
  b: { l: baseL + 7, c: baseC +  5, h: 240 + 35 },
  m: { l: baseL + 4, c: baseC +  7, h: 300 + 10 },
  p: { l: baseL + 4, c: baseC +  7, h: 330 + 10 },
}

const paletteLCH: LCHPaletteSet = {
  std: stdPaletteLCH,
  light: lightPalette(stdPaletteLCH),
  bg: bgPalette(stdPaletteLCH, bgLCH, 2, 0.5),
  bgWeaker: bgPalette(stdPaletteLCH, bgLCH, 2, 0.9)
}

const grayScale = 16
const grayLCH: LCHColor[] = new Array(grayScale);
for (let i = 0; i < grayScale; i++) {
  grayLCH[i] = {
    l: i*100/(grayScale-1),
    c: bgLCH.c,
    h: bgLCH.h
  };
 }

export const paletteHEX: HEXPaletteSet = {
  std: transPalette(paletteLCH.std, lchToHex),
  light: transPalette(paletteLCH.light, lchToHex),
  bg: transPalette(paletteLCH.bg, lchToHex),
  bgWeaker: transPalette(paletteLCH.bgWeaker, lchToHex)
}
export const grayHEX: HEXColor[] = new Array(grayLCH.length);
for (let i = 0; i < grayLCH.length; i++) { grayHEX[i] = lchToHex(grayLCH[i]); }
export const fgHEX: HEXColor = grayHEX[grayScale-3];
