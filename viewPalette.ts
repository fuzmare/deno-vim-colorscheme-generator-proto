import {
  paletteHEX,
  grayHEX,
  fgHEX,
  bgHEX
} from "./palette.ts"
import {
  RGBColor,
  HEXColor,
  HEXPalette,
  hexToRgb,
} from "./deps.ts"

function colorblock(bgHex: HEXColor, fgHex: HEXColor, str: string) {
  const bg: RGBColor = hexToRgb(bgHex)
  const fg: RGBColor = hexToRgb(fgHex)
  return `\x1b[48;2;${bg.r};${bg.g};${bg.b}m\x1b[38;2;${fg.r};${fg.g};${fg.b}m${str}\x1b[0m`;
}

for (let i = 0; i < grayHEX.length; i++) { console.log(colorblock(grayHEX[i],fgHEX,"    "), colorblock(bgHEX,grayHEX[i],grayHEX[i])); }
const colorKeys = Object.keys(paletteHEX.std) as Array<keyof HEXPalette>;
colorKeys.forEach(key => console.log(colorblock(paletteHEX.std[key],fgHEX,"    "), colorblock(paletteHEX.light[key],fgHEX,"    "), colorblock(paletteHEX.bg[key],fgHEX,"    ")));
colorKeys.forEach(key => console.log(colorblock(bgHEX,paletteHEX.std[key],paletteHEX.std[key]), colorblock(bgHEX,paletteHEX.light[key],paletteHEX.light[key]), colorblock(paletteHEX.bg[key],fgHEX,paletteHEX.bg[key])));
console.log(colorblock(bgHEX,fgHEX,bgHEX), colorblock(fgHEX,bgHEX,fgHEX));
