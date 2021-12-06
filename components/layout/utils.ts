import {isNumeric} from "rxjs/internal-compatibility";
import {Renderer2} from "@angular/core";

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

export class ElementStyle {
  size: string
  breakpoint: number
  gutter: any
}

// 插入 Angular Element 绑定的 style
export function insertGutterElementStyle(target: Element, container: HTMLElement, renderer: Renderer2, style: ElementStyle) {


  // 判断目标元素是否有ID，如果没有则伪随机生成一个
  let scope = target.getAttribute('id')
  if (!scope) {
    scope = 's' + Math.random().toString(36).substr(2, 9)
    target.setAttribute('id', scope)
  }
  // @ts-ignore
  const id = `${renderer.hostAttr}_${style.size}`

  // 构建CSS
  const css = `@media (min-width: ${style.breakpoint}px){
    #${scope}{
          margin-right: calc(-.5 * ${style.gutter});
          margin-left: calc(-.5 * ${style.gutter});
       }
    #${scope} > *{
       padding-right: calc(${style.gutter} * .5);
       padding-left: calc(${style.gutter} * .5);
       }
    }`

  // 查询节点是否已存在
  let exist = null;
  let current = target
  while (true) {
    if (!current.previousElementSibling || current.previousElementSibling.nodeName.toLowerCase() !== 'style') {
      break;
    }
    current = current.previousElementSibling
    if (current.id == id) {
      exist = current
      break
    }
  }

  // 如果Style节点已经存在，则替换节点
  if (exist != null) {
    exist.innerHTML = css
    return
  }

  // 多个媒体查询从小到大排序插入
  current = target
  while (true) {
    if (!current.previousElementSibling || current.previousElementSibling.nodeName.toLowerCase() !== 'style') {
      break;
    }
    current = current.previousElementSibling
    const breakpoint = parseInt(current.getAttribute('breakpoint'))
    if (breakpoint > style.breakpoint) {
      target = current
    }
  }

  // 插入 style 节点
  let node = renderer.createElement('style')
  node.id = id
  node.innerHTML = css
  node.setAttribute('breakpoint', style.breakpoint)
  node.setAttribute('gutter', style.gutter)
  renderer.insertBefore(container, node, target)
}
