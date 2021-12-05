import {isNumeric} from "rxjs/internal-compatibility";
import {bottom} from "@popperjs/core";

export type SpacingSize = '0' | '1' | '2' | '3' | '4' | '5' | 'auto';

// 判断是否是默认的尺寸
export function isDefaultSpacingSize(v): boolean {
  return isNumeric(v) || v === 'auto';
}

// 预设的系统颜色
export type Color =
  'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'body'
  | 'white'
  | 'transparent'
  | 'rand'
  | string;

// 判断是否是默认的颜色
export function isDefaultColor(v): boolean {
  switch (v) {
    case 'primary':
    case 'secondary':
    case 'success':
    case 'danger':
    case 'warning':
    case 'info':
    case 'light':
    case 'dark':
    case 'body':
    case 'white':
    case 'transparent':
      return true
  }
  return false
}

// 生成随机颜色
export function randColor(): string {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

export const MediaBreakPoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
}

// 插入 Angular Element 绑定的 style
export function insertElementStyle() {

}
