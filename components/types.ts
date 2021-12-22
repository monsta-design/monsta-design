import {isNumeric} from "rxjs/internal-compatibility";
import {Renderer2} from "@angular/core";


export type NS_BOOL = boolean | 'false' | 'true'
export type NS_SIZE = 'default' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid';
export type NS_INPUT_TYPE = 'text' | 'password' | 'number' | 'file' | 'color';
export type NS_COLOR =
  'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'white'
  | 'transparent';

export function isTrue(v): boolean {
  return v === true || v === 'true'
}

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

export const BreakPoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
}

export type FlexDirectionMode = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type FlexJustifyMode = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
export type FlexAlignMode = 'start' | 'end' | 'center' | 'stretch';
export type FlexAlignSelfMode = 'start' | 'end' | 'center' | 'stretch' | 'baseline' | '';
export type FlexWrapMode = 'wrap' | 'nowrap' | 'wrap-reverse';
export type FlexGrow = 0 | 1 | '0' | '1';
export type FlexShark = 0 | 1 | '0' | '1';

export class ElementStyle {
  media: string
  breakpoint: number
  cssGetter: (scope: string) => string
}

export function generateID(): string {
  return 's' + Math.random().toString(36).substr(2, 9)
}

export function insertElementStyle(target: Element, container: HTMLElement, renderer: Renderer2, style: ElementStyle): Element {
  // 判断目标元素是否有ID，如果没有则伪随机生成一个
  let scope = target.getAttribute('id')
  if (!scope) {
    scope = generateID()
    target.setAttribute('id', scope)
  }
  // @ts-ignore
  const id = `${scope}_${style.media}`

  // 构建媒体查询
  let media = null
  if (style.breakpoint !== 0) {
    media = `@media (min-width: ${style.breakpoint}px)`
  }
  // 获取 CSS 代码
  let css = style.cssGetter(scope)
  if (media) {
    css = `${media}{
      ${css}
    }`
  }
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
  renderer.insertBefore(container, node, target)
  return node
}

export function uuid() {
  let d = new Date().getTime();
  return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

export class NSShadow {
  protected _helper: Element;
  private _added = false;

  constructor(protected parent: Element, protected renderer: Renderer2) {
    // generate helper div
    let helper = renderer.createElement('div');
    renderer.setStyle(helper, 'position', 'absolute');
    renderer.setStyle(helper, 'width', '100%');
    renderer.setStyle(helper, 'height', '100%');
    renderer.setStyle(helper, 'background-color', 'transparent');
    renderer.setStyle(helper, 'top', '0');
    renderer.setStyle(helper, 'left', '0');

    // done
    this._helper = helper;
  }

  add() {
    // append div to parent
    if (this.parent && !this._added) {
      this.parent.appendChild(this._helper);
      this._added = true;
    }
  }

  remove() {
    if (this.parent && this._added) {
      this.parent.removeChild(this._helper);
      this._added = false;
    }
  }

  dispose() {
    this._helper = null;
    this._added = false;
  }

  get el() {
    return this._helper;
  }
}

export interface NSIPosition {
  x: number;
  y: number;
  rotate?: number;
  scaleX?: number;
  scaleY?: number;
}

export class NSPosition implements NSIPosition {
  constructor(
    public x: number,
    public y: number,
    public rotate = 0,
    public scaleX = 0,
    public scaleY = 0
  ) {
  }

  static fromEvent(e: MouseEvent | TouchEvent, el: any = null) {
    /**
     * Fix issue: Resize doesn't work on Windows10 IE11 (and on some windows 7 IE11)
     * https://github.com/xieziyu/ngx-draggable-resize/issues/164
     * e instanceof MouseEvent check returns false on IE11
     */
    if (this.isMouseEvent(e)) {
      return new NSPosition(e.clientX, e.clientY);
    } else {
      if (el === null || e.changedTouches.length === 1) {
        return new NSPosition(
          e.changedTouches[0].clientX,
          e.changedTouches[0].clientY
        );
      }

      /**
       * Fix issue: Multiple phone draggables at the same time
       * https://github.com/xieziyu/ngx-draggable-resize/issues/128
       */
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].target === el) {
          return new NSPosition(
            e.changedTouches[i].clientX,
            e.changedTouches[i].clientY
          );
        }
      }
    }
  }

  static isMouseEvent(e: MouseEvent | TouchEvent): e is MouseEvent {
    return Object.prototype.toString.apply(e).indexOf("MouseEvent") === 8;
  }

  static isIPosition(obj): obj is NSIPosition {
    return !!obj && "x" in obj && "y" in obj;
  }

  static getCurrent(el: Element) {
    let pos = new NSPosition(0, 0, 0, 0, 0);

    if (window) {
      const computed = window.getComputedStyle(el);
      if (computed) {
        let x = parseInt(computed.getPropertyValue("left"), 10);
        let y = parseInt(computed.getPropertyValue("top"), 10);
        pos.x = isNaN(x) ? 0 : x;
        pos.y = isNaN(y) ? 0 : y;
      }
      return pos;
    } else {
      console.error("Not Supported!");
      return null;
    }
  }

  static copy(p: NSIPosition) {
    return new NSPosition(0, 0, 0, 0, 0).set(p);
  }

  get value(): NSIPosition {
    return {
      x: this.x,
      y: this.y,
      rotate: this.rotate,
      scaleX: this.scaleX,
      scaleY: this.scaleY
    };
  }

  add(p: NSIPosition) {
    this.x += p.x;
    this.y += p.y;
    return this;
  }

  subtract(p: NSIPosition) {
    this.x -= p.x;
    this.y -= p.y;
    return this;
  }

  multiply(n: number) {
    this.x *= n;
    this.y *= n;
  }

  divide(n: number) {
    this.x /= n;
    this.y /= n;
  }

  reset() {
    this.x = 0;
    this.y = 0;
    this.rotate = 0;
    this.scaleX = 0;
    this.scaleY = 0;
    return this;
  }

  set(p: NSIPosition) {
    this.x = p.x;
    this.y = p.y;
    this.rotate = p.rotate;
    this.scaleY = p.scaleY;
    this.scaleX = p.scaleX;
    return this;
  }
}
