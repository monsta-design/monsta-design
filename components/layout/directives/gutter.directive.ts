import {Directive, ElementRef, HostBinding, Input, OnChanges, OnInit, Renderer2, SimpleChanges,} from '@angular/core';
import {
  isGapClass,
  BreakPoints,
  BootstrapGapSize,
  insertElementStyle, NSGapValue, toGapClass
} from 'monsta-design/core';
import {isNumeric} from "rxjs/internal-compatibility";

export class GutterStyle {
  media: string
  breakpoint: number
  gutter: any
  type: NSGutterType
}

// 插入 Angular element gutter style
export function insertGutterElementStyle(target: Element, container: HTMLElement, renderer: Renderer2, style: GutterStyle) {
  if (isNumeric(style.gutter)) {
    style.gutter += 'px'
  }
  insertElementStyle(target, container, renderer, {
    name: `gutter_${style.type}`,
    media: style.media,
    breakpoint: style.breakpoint,
    cssGetter: (scope: string): string => {
      switch (style.type) {
        case 'gx':
          return `
          #${scope}{
              margin-right: calc(-.5 * ${style.gutter});
              margin-left: calc(-.5 * ${style.gutter});
           }
          #${scope} > *{
           padding-right: calc(${style.gutter} * .5);
           padding-left: calc(${style.gutter} * .5);
          }`
        case 'gy':
          return `
          #${scope}{
              margin-top: calc(-1 * ${style.gutter});
           }
          #${scope} > *{
              margin-top: ${style.gutter};
          }`
        default:
          return `
          #${scope}{
              margin-right: calc(-.5 * ${style.gutter});
              margin-left: calc(-.5 * ${style.gutter});
              margin-top: calc(-1 * ${style.gutter});
           }
          #${scope} > *{
           padding-right: calc(${style.gutter} * .5);
           padding-left: calc(${style.gutter} * .5);
           margin-top: ${style.gutter};
          }`
      }
    }
  })
}

export type NSGutterType = 'gx' | 'gy' | 'g';

@Directive({
  selector: '[g]'
})
export class GDirective implements OnChanges {
  @Input('g') size: NSGapValue
  protected media: string = 'default'
  protected breakpoint: number = 0
  protected type: NSGutterType = 'g'

  @HostBinding('class')
  get class() {
    if (isGapClass(this.size)) {
      if (this.media !== 'default') {
        return `bs-${this.type}-${this.media}-${toGapClass(this.size)}`
      }
      return `bs-${this.type}-${toGapClass(this.size)}`
    }
    return null
  }

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
  }

  ngOnInit() {
    if (isGapClass(this.size)) {
      return
    }
    this.insertStyle()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.insertStyle()
  }

  insertStyle() {
    insertGutterElementStyle(
      this.el.nativeElement,
      this.el.nativeElement.parentElement,
      this.renderer,
      {
        media: this.media,
        breakpoint: this.breakpoint,
        gutter: this.size,
        type: this.type,
      },
    )
  }
}

@Directive({
  selector: '[g_sm]'
})
export class GSMDirective extends GDirective {
  @Input('g_sm') size: NSGapValue

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
    this.media = 'sm'
    this.breakpoint = BreakPoints.sm
    this.type = 'g'
  }
}

@Directive({
  selector: '[g_md]'
})
export class GMDDirective extends GDirective {
  @Input('g_md') size: NSGapValue

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
    this.media = 'md'
    this.breakpoint = BreakPoints.md
    this.type = 'g'
  }
}

@Directive({
  selector: '[g_lg]'
})
export class GLGDirective extends GDirective {
  @Input('g_lg') size: NSGapValue

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
    this.media = 'lg'
    this.breakpoint = BreakPoints.lg
    this.type = 'g'
  }
}

@Directive({
  selector: '[g_xl]'
})
export class GXLDirective extends GDirective {
  @Input('g_xl') size: NSGapValue

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
    this.media = 'xl'
    this.breakpoint = BreakPoints.xl
    this.type = 'g'
  }
}

@Directive({
  selector: '[g_xxl]'
})
export class GXXLDirective extends GDirective {
  @Input('g_xxl') size: NSGapValue

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
    this.media = 'xxl'
    this.breakpoint = BreakPoints.xxl
    this.type = 'g'
  }
}


@Directive({
  selector: '[gx]'
})
export class GxDirective extends GDirective {
  @Input('gx') size: NSGapValue

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
    this.media = 'default'
    this.breakpoint = 0
    this.type = 'gx'
  }
}

@Directive({
  selector: '[gx_sm]'
})
export class GxSMDirective extends GDirective {
  @Input('gx_sm') size: NSGapValue

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
    this.media = 'sm'
    this.breakpoint = BreakPoints.sm
    this.type = 'gx'
  }
}

@Directive({
  selector: '[gx_md]'
})
export class GxMDDirective extends GDirective {
  @Input('gx_md') size: NSGapValue

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
    this.media = 'md'
    this.breakpoint = BreakPoints.md
    this.type = 'gx'
  }
}

@Directive({
  selector: '[gx_lg]'
})
export class GxLGDirective extends GDirective {
  @Input('gx_lg') size: NSGapValue

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
    this.media = 'lg'
    this.breakpoint = BreakPoints.lg
    this.type = 'gx'
  }
}

@Directive({
  selector: '[gx_xl]'
})
export class GxXLDirective extends GDirective {
  @Input('gx_xl') size: NSGapValue

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
    this.media = 'xl'
    this.breakpoint = BreakPoints.xl
    this.type = 'gx'
  }
}

@Directive({
  selector: '[gx_xxl]'
})
export class GxXXLDirective extends GDirective {
  @Input('gx_xxl') size: NSGapValue

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
    this.media = 'xxl'
    this.breakpoint = BreakPoints.xxl
    this.type = 'gx'
  }
}

@Directive({
  selector: '[gy]'
})
export class GyDirective extends GDirective {
  @Input('gy') size: NSGapValue

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
    this.media = 'default'
    this.breakpoint = 0
    this.type = 'gy'
  }
}


@Directive({
  selector: '[gy_sm]'
})
export class GySMDirective extends GDirective {
  @Input('gy_sm') size: NSGapValue

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
    this.media = 'sm'
    this.breakpoint = BreakPoints.sm
    this.type = 'gy'
  }
}

@Directive({
  selector: '[gy_md]'
})
export class GyMDDirective extends GDirective {
  @Input('gy_md') size: NSGapValue

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
    this.media = 'md'
    this.breakpoint = BreakPoints.md
    this.type = 'gy'
  }
}

@Directive({
  selector: '[gy_lg]'
})
export class GyLGDirective extends GDirective {
  @Input('gy_lg') size: NSGapValue

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
    this.media = 'lg'
    this.breakpoint = BreakPoints.lg
    this.type = 'gy'
  }
}

@Directive({
  selector: '[gy_xl]'
})
export class GyXLDirective extends GDirective {
  @Input('gy_md') size: NSGapValue

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
    this.media = 'xl'
    this.breakpoint = BreakPoints.xl
    this.type = 'gy'
  }
}

@Directive({
  selector: '[gy_xxl]'
})
export class GyXXLDirective extends GDirective {
  @Input('gy_xxl') size: NSGapValue

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer);
    this.media = 'xxl'
    this.breakpoint = BreakPoints.xxl
    this.type = 'gy'
  }
}

export const GutterDirectives = [
  // g
  GDirective,
  GSMDirective,
  GMDDirective,
  GLGDirective,
  GXLDirective,
  GXXLDirective,
  // gx
  GxDirective,
  GxSMDirective,
  GxMDDirective,
  GxLGDirective,
  GxXLDirective,
  GxXXLDirective,
  // gy
  GyDirective,
  GySMDirective,
  GyMDDirective,
  GyLGDirective,
  GyXLDirective,
  GyXXLDirective,
]
