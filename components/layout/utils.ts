import {isNumeric} from "rxjs/internal-compatibility";

export type SpacingSize = '0' | '1' | '2' | '3' | '4' | '5' | 'auto';

export function isSpacingSize(v): boolean {
  return isNumeric(v) || v === 'auto';
}

export const MediaBreakPoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
}
