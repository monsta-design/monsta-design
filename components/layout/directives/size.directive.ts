import {Directive, ElementRef, HostBinding, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';
import {isNumeric} from "rxjs/internal-compatibility";
import {BreakPoints, insertElementStyle} from 'monsta-design/core';
import {retry} from "rxjs/operators";

export function isSizeClass(v: any): boolean {
  return v === 'auto'
}

export type NSSizeType = 'w' | 'h';

export class SizeStyle {
  type: NSSizeType
  media: string
  width?: any
  height?: string
  breakpoint: number
}

// 插入 Angular element size style
export function insertSizeElementStyle(target: Element, container: HTMLElement, renderer: Renderer2, style: SizeStyle) {
  if (isNumeric(style.width)) {
    style.width += 'px'
  }
  if (isNumeric(style.height)) {
    style.height += 'px'
  }
  insertElementStyle(target, container, renderer, {
    name: `size_${style.type}`,
    media: style.media,
    breakpoint: style.breakpoint,
    cssGetter: (scope: string): string => {
      switch (style.type) {
        case 'w':
          return `
          #${scope}{
              width: ${style.width} !important;
          }
          `
        case 'h':
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

export type NSSize = 'auto' | number | string;

@Directive({
  selector: '[w]',
})
export class WDirective {
  @Input('w') size: NSSize;

  @HostBinding('class') get class() {
    if (isSizeClass(this.size)) {
      return 'bs-w-' + this.size
    }
    return null
  }

  @HostBinding('style.width') get style() {
    if (isSizeClass(this.size)) {
      return null
    }
    if (isNumeric(this.size)) {
      return `${this.size}px`
    }
    return this.size
  }
}


@Directive({
  selector: '[h]',
})
export class HDirective {
  @Input('h') size: NSSize;

  @HostBinding('class') get class() {
    if (isSizeClass(this.size)) {
      return 'bs-h-' + this.size
    }
    return null
  }

  @HostBinding('style.height') get style() {
    if (isSizeClass(this.size)) {
      return null
    }
    if (isNumeric(this.size)) {
      return `${this.size}px`
    }
    return this.size
  }
}

@Directive({
  selector: '[w_sm]',
})
export class WSmDirective implements OnChanges {
  @Input('w_sm') size: NSSize;
  protected media: string = 'sm'
  protected breakpoint: number = BreakPoints.sm
  protected type: NSSizeType = 'w'

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
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
        media: this.media,
        breakpoint: this.breakpoint,
        type: this.type,
        width: this.size,
      },
    )
  }
}


@Directive({
  selector: '[w_md]',
})
export class WMdDirective extends WSmDirective {
  @Input('w_md') size: NSSize;

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
    this.media = 'md'
    this.breakpoint = BreakPoints.md
    this.type = 'w'
  }
}

@Directive({
  selector: '[w_lg]',
})
export class WLgDirective extends WSmDirective {
  @Input('w_lg') size: NSSize;

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
    this.media = 'lg'
    this.breakpoint = BreakPoints.lg
    this.type = 'w'
  }
}

@Directive({
  selector: '[w_xl]',
})
export class WXlDirective extends WSmDirective {
  @Input('w_xl') size: NSSize;

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
    this.media = 'xl'
    this.breakpoint = BreakPoints.xl
    this.type = 'w'
  }
}

@Directive({
  selector: '[w_xxl]',
})
export class WXxlDirective extends WSmDirective {
  @Input('w_xxl') size: NSSize;

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
    this.media = 'xxl'
    this.breakpoint = BreakPoints.xxl
    this.type = 'w'
  }
}

@Directive({
  selector: '[h_sm]',
})
export class HSmDirective extends WSmDirective {
  @Input('h_sm') size: NSSize;

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
    this.media = 'sm'
    this.breakpoint = BreakPoints.sm
    this.type = 'h'
  }
}

@Directive({
  selector: '[h_md]',
})
export class HMdDirective extends WSmDirective {
  @Input('h_md') size: NSSize;

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
    this.media = 'md'
    this.breakpoint = BreakPoints.md
    this.type = 'h'
  }
}

@Directive({
  selector: '[h_lg]',
})
export class HLgDirective extends WSmDirective {
  @Input('h_lg') size: NSSize;

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
    this.media = 'lg'
    this.breakpoint = BreakPoints.lg
    this.type = 'h'
  }
}

@Directive({
  selector: '[h_xl]',
})
export class HXlDirective extends WSmDirective {
  @Input('h_xl') size: NSSize;

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
    this.media = 'xl'
    this.breakpoint = BreakPoints.xl
    this.type = 'h'
  }
}

@Directive({
  selector: '[h_xxl]',
})
export class HXxlDirective extends WSmDirective {
  @Input('h_xxl') size: NSSize;

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
    this.media = 'xxl'
    this.breakpoint = BreakPoints.xxl
    this.type = 'h'
  }
}

export const SizeDirectives = [
  // w
  WDirective,
  WSmDirective,
  WMdDirective,
  WLgDirective,
  WXlDirective,
  WXxlDirective,
  // h
  HDirective,
  HSmDirective,
  HMdDirective,
  HLgDirective,
  HXlDirective,
  HXxlDirective,
]
