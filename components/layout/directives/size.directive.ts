import {Directive, ElementRef, HostBinding, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';
import {isNumeric} from "rxjs/internal-compatibility";
import {BreakPoints, insertElementStyle} from "../../types";

export function isDefaultSize(v: any): boolean {
  return isNumeric(v) || v === 'auto'
}

export class SizeStyle {
  type: 'width' | 'height' | 'all'
  media: string
  width?: any
  height?: string
  breakpoint: number
}

// 插入 Angular element size style
export function insertSizeElementStyle(target: Element, container: HTMLElement, renderer: Renderer2, style: SizeStyle) {
  // TODO 转换 Bootstrap Class
  insertElementStyle(target, container, renderer, {
    media: style.media,
    breakpoint: style.breakpoint,
    cssGetter: (scope: string): string => {
      switch (style.type) {
        case 'width':
          return `
          #${scope}{
              width: ${style.width} !important;
          }
          `
        case 'height':
          return `
          #${scope}{
              height: ${style.height} !important;
          }`
        default:
          return `
          #${scope}{
              width: ${style.width} !important;
              height: ${style.height} !important;
          }
          `
      }
    }
  })
}

export type SizeValue = 25 | 50 | 75 | 100 | 'auto' | string;

@Directive({
  selector: '[_w]',
})
export class WDirective {
  @Input('_w') size: SizeValue = null;

  @HostBinding('class') get class() {
    if (isDefaultSize(this.size)) {
      return 'bs-w-' + this.size
    }
    return null
  }

  @HostBinding('style.width') get style() {
    if (isDefaultSize(this.size)) {
      return null
    }
    return this.size
  }
}

@Directive({
  selector: '[_w_sm]',
})
export class WSmDirective implements OnChanges {
  @Input('_w_sm') size: SizeValue = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.insertStyle()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.insertStyle()
  }

  insertStyle() {
    insertSizeElementStyle(
      this.el.nativeElement,
      this.el.nativeElement.parentElement,
      this.renderer,
      {
        media: 'sm',
        breakpoint: BreakPoints.sm,
        type: 'width',
        width: this.size,
      },
    )
  }
}


@Directive({
  selector: '[_w_md]',
})
export class WMdDirective implements OnChanges {
  @Input('_w_md') size: SizeValue = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.insertStyle()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.insertStyle()
  }

  insertStyle() {
    insertSizeElementStyle(
      this.el.nativeElement,
      this.el.nativeElement.parentElement,
      this.renderer,
      {
        media: 'md',
        breakpoint: BreakPoints.md,
        type: 'width',
        width: this.size,
      },
    )
  }
}

@Directive({
  selector: '[_w_lg]',
})
export class WLgDirective implements OnChanges {
  @Input('_w_lg') size: SizeValue = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.insertStyle()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.insertStyle()
  }

  insertStyle() {
    insertSizeElementStyle(
      this.el.nativeElement,
      this.el.nativeElement.parentElement,
      this.renderer,
      {
        media: 'lg',
        breakpoint: BreakPoints.lg,
        type: 'width',
        width: this.size,
      },
    )
  }
}

@Directive({
  selector: '[_w_xl]',
})
export class WXlDirective implements OnChanges {
  @Input('_w_xl') size: SizeValue = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.insertStyle()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.insertStyle()
  }

  insertStyle() {
    insertSizeElementStyle(
      this.el.nativeElement,
      this.el.nativeElement.parentElement,
      this.renderer,
      {
        media: 'xl',
        breakpoint: BreakPoints.xl,
        type: 'width',
        width: this.size,
      },
    )
  }
}

@Directive({
  selector: '[_w_xxl]',
})
export class WXxlDirective implements OnChanges {
  @Input('_w_xxl') size: SizeValue = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.insertStyle()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.insertStyle()
  }

  insertStyle() {
    insertSizeElementStyle(
      this.el.nativeElement,
      this.el.nativeElement.parentElement,
      this.renderer,
      {
        media: 'xxl',
        breakpoint: BreakPoints.xxl,
        type: 'width',
        width: this.size,
      },
    )
  }
}


@Directive({
  selector: '[_h]',
})
export class HDirective {
  @Input('_h') size: 25 | 50 | 75 | 100 | 'auto' | string = null;

  @HostBinding('class') get class() {
    if (isNumeric(this.size)) {
      return 'bs-h-' + this.size
    }
    return null
  }

  @HostBinding('style.height') get style() {
    if (isNumeric(this.size)) {
      return null
    }
    return this.size
  }
}

@Directive({
  selector: '[_h_sm]',
})
export class HSmDirective implements OnChanges {
  @Input('_h_sm') size: SizeValue = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.insertStyle()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.insertStyle()
  }

  insertStyle() {
    insertSizeElementStyle(
      this.el.nativeElement,
      this.el.nativeElement.parentElement,
      this.renderer,
      {
        media: 'sm',
        breakpoint: BreakPoints.sm,
        type: 'height',
        width: this.size,
      },
    )
  }
}

@Directive({
  selector: '[_h_md]',
})
export class HMdDirective implements OnChanges {
  @Input('_h_md') size: SizeValue = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.insertStyle()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.insertStyle()
  }

  insertStyle() {
    insertSizeElementStyle(
      this.el.nativeElement,
      this.el.nativeElement.parentElement,
      this.renderer,
      {
        media: 'md',
        breakpoint: BreakPoints.md,
        type: 'height',
        width: this.size,
      },
    )
  }
}

@Directive({
  selector: '[_h_lg]',
})
export class HLgDirective implements OnChanges {
  @Input('_h_lg') size: SizeValue = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.insertStyle()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.insertStyle()
  }

  insertStyle() {
    insertSizeElementStyle(
      this.el.nativeElement,
      this.el.nativeElement.parentElement,
      this.renderer,
      {
        media: 'lg',
        breakpoint: BreakPoints.lg,
        type: 'height',
        width: this.size,
      },
    )
  }
}

@Directive({
  selector: '[_h_xl]',
})
export class HXlDirective implements OnChanges {
  @Input('_h_xl') size: SizeValue = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.insertStyle()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.insertStyle()
  }

  insertStyle() {
    insertSizeElementStyle(
      this.el.nativeElement,
      this.el.nativeElement.parentElement,
      this.renderer,
      {
        media: 'xl',
        breakpoint: BreakPoints.xl,
        type: 'height',
        width: this.size,
      },
    )
  }
}

@Directive({
  selector: '[_h_xxl]',
})
export class HXxlDirective implements OnChanges {
  @Input('_h_xxl') size: SizeValue = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.insertStyle()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.insertStyle()
  }

  insertStyle() {
    insertSizeElementStyle(
      this.el.nativeElement,
      this.el.nativeElement.parentElement,
      this.renderer,
      {
        media: 'xxl',
        breakpoint: BreakPoints.xxl,
        type: 'height',
        width: this.size,
      },
    )
  }
}

export const SizeDirectives = [
  WDirective,
  WSmDirective,
  WMdDirective,
  WLgDirective,
  WXlDirective,
  WXxlDirective,
  HDirective,
  HMdDirective,
  HLgDirective,
  HXlDirective,
  HXxlDirective,
]
