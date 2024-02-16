import chroma, { InterpolationMode } from 'chroma-js';

export const almostBlack = '#2d2d2d' as const;
export const almostWhite = '#fbfbfb' as const;
export const lightBlue = '#6fa8dc' as const;
export const darkBlue = '#073763' as const;

export const colorRange = (startColor: string, endColor: string, mode: InterpolationMode = 'lch') =>
  chroma.scale([startColor, endColor]).mode(mode).colors(25);

export function foreColor(color: string): string {
  return chroma(color).luminance() > 0.33 ? almostBlack : almostWhite;
}

export function nameColor(color: string): string {
  return chroma(color).name();
}
