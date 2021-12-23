import {Directive, ElementRef, HostBinding, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';
import {BreakPoints, insertElementStyle, isDefaultSpacingSize, SpacingSize} from 'monsta-design/core';

type MarginType = 'm' | 'mt' | 'mb' | 'ms' | 'me' | 'mx' | 'my'

export class MarginStyle {
  media: string
  breakpoint: number
  size: any
  type: MarginType
}

// 插入 Angular element margin style
export function insertMarginElementStyle(target: Element, container: HTMLElement, renderer: Renderer2, style: MarginStyle) {
  insertElementStyle(target, container, renderer, {
    media: style.media,
    breakpoint: style.breakpoint,
    cssGetter: (scope: string): string => {
      switch (style.type) {
        case 'mt':
          return `
          #${scope}{
              margin-top: ${style.size};
          }`
        case 'mb':
          return `
          #${scope}{
              margin-bottom: ${style.size};
          }`
        case 'ms':
          return `
          #${scope}{
              margin-left: ${style.size};
          }`
        case 'me':
          return `
          #${scope}{
              margin-right: ${style.size};
          }`
        case 'mx':
          return `
          #${scope}{
              margin-left: ${style.size};
              margin-right: ${style.size};
          }`
        case 'my':
          return `
          #${scope}{
              margin-top: ${style.size};
              margin-bottom: ${style.size};
          }`
        default:
          return `
          #${scope}{
              margin: ${style.size};
          }`
      }
    }
  })
}

export  type MarginSize = SpacingSize | number | string

@Directive({
  selector: '[m]'
})
export class MDirective implements OnChanges {
  @Input('m') size: MarginSize
  protected media: string = 'default'
  protected breakpoint: number = 0
  protected type: MarginType = 'm'

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      if (this.media !== 'default') {
        return `bs-m-${this.media}-${this.size}`
      }
      return `bs-m-${this.size}`
    }
    return null
  }

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (isDefaultSpacingSize(this.size)) {
      return
    }
    this.insertStyle()
  }

  insertStyle() {
    insertMarginElementStyle(
      this.el.nativeElement,
      this.el.nativeElement.parentElement,
      this.renderer,
      {
        media: this.media,
        breakpoint: this.breakpoint,
        size: this.size,
        type: this.type,
      },
    )
  }
}

@Directive({
  selector: '[m_sm]'
})
export class MSmDirective extends MDirective {
  @Input('m_sm') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'sm'
    this.breakpoint = BreakPoints.sm
    this.type = 'm'
  }
}

@Directive({
  selector: '[m_md]'
})
export class MMdDirective extends MDirective {
  @Input('m_md') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'md'
    this.breakpoint = BreakPoints.md
    this.type = 'm'
  }
}

@Directive({
  selector: '[m_lg]'
})
export class MLgDirective extends MDirective {
  @Input('m_lg') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'lg'
    this.breakpoint = BreakPoints.lg
    this.type = 'm'
  }
}

@Directive({
  selector: '[m_xl]'
})
export class MXlDirective extends MDirective {
  @Input('m_xl') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xl'
    this.breakpoint = BreakPoints.xl
    this.type = 'm'
  }
}

@Directive({
  selector: '[m_xxl]'
})
export class MXxlDirective extends MDirective {
  @Input('m_xxl') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xxl'
    this.breakpoint = BreakPoints.xxl
    this.type = 'm'
  }
}

@Directive({
  selector: '[mt]'
})
export class MtDirective extends MDirective {
  @Input('mt') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'default'
    this.breakpoint = 0
    this.type = 'mt'
  }
}

@Directive({
  selector: '[mt_sm]'
})
export class MtSmDirective extends MDirective {
  @Input('mt_sm') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'sm'
    this.breakpoint = BreakPoints.sm
    this.type = 'mt'
  }
}

@Directive({
  selector: '[mt_md]'
})
export class MtMdDirective extends MDirective {
  @Input('mt_md') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'md'
    this.breakpoint = BreakPoints.md
    this.type = 'mt'
  }
}

@Directive({
  selector: '[mt_lg]'
})
export class MtLgDirective extends MDirective {
  @Input('mt_lg') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'lg'
    this.breakpoint = BreakPoints.lg
    this.type = 'mt'
  }
}

@Directive({
  selector: '[mt_xl]'
})
export class MtXlDirective extends MDirective {
  @Input('mt_xl') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xl'
    this.breakpoint = BreakPoints.xl
    this.type = 'mt'
  }
}

@Directive({
  selector: '[mt_xxl]'
})
export class MtXxlDirective extends MDirective {
  @Input('mt_xxl') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xxl'
    this.breakpoint = BreakPoints.xxl
    this.type = 'mt'
  }
}

@Directive({
  selector: '[mb]'
})
export class MbDirective extends MDirective {
  @Input('mb') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'default'
    this.breakpoint = 0
    this.type = 'mb'
  }
}

@Directive({
  selector: '[mb_sm]'
})
export class MbSmDirective extends MDirective {
  @Input('mb_sm') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'sm'
    this.breakpoint = BreakPoints.sm
    this.type = 'mb'
  }
}

@Directive({
  selector: '[mb_md]'
})
export class MbMdDirective extends MDirective {
  @Input('mb_md') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'md'
    this.breakpoint = BreakPoints.md
    this.type = 'mb'
  }
}

@Directive({
  selector: '[mb_lg]'
})
export class MbLgDirective extends MDirective {
  @Input('mb_lg') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'lg'
    this.breakpoint = BreakPoints.lg
    this.type = 'mb'
  }
}

@Directive({
  selector: '[mb_xl]'
})
export class MbXlDirective extends MDirective {
  @Input('mb_xl') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xl'
    this.breakpoint = BreakPoints.xl
    this.type = 'mb'
  }
}

@Directive({
  selector: '[mb_xxl]'
})
export class MbXxlDirective extends MDirective {
  @Input('mb_xxl') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xxl'
    this.breakpoint = BreakPoints.xxl
    this.type = 'mb'
  }
}


@Directive({
  selector: '[ms]'
})
export class MsDirective extends MDirective {
  @Input('ms') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'default'
    this.breakpoint = 0
    this.type = 'ms'
  }
}

@Directive({
  selector: '[ms_sm]'
})
export class MsSmDirective extends MDirective {
  @Input('ms_sm') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'sm'
    this.breakpoint = BreakPoints.sm
    this.type = 'ms'
  }
}

@Directive({
  selector: '[ms_md]'
})
export class MsMdDirective extends MDirective {
  @Input('ms_md') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'md'
    this.breakpoint = BreakPoints.md
    this.type = 'ms'
  }
}

@Directive({
  selector: '[ms_lg]'
})
export class MsLgDirective extends MDirective {
  @Input('ms_lg') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'lg'
    this.breakpoint = BreakPoints.lg
    this.type = 'ms'
  }
}

@Directive({
  selector: '[ms_xl]'
})
export class MsXlDirective extends MDirective {
  @Input('ms_xl') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xl'
    this.breakpoint = BreakPoints.xl
    this.type = 'ms'
  }
}

@Directive({
  selector: '[ms_xxl]'
})
export class MsXxlDirective extends MDirective {
  @Input('ms_xxl') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xxl'
    this.breakpoint = BreakPoints.xxl
    this.type = 'ms'
  }
}


@Directive({
  selector: '[me]'
})
export class MeDirective extends MDirective {
  @Input('me') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'default'
    this.breakpoint = 0
    this.type = 'me'
  }
}

@Directive({
  selector: '[me_sm]'
})
export class MeSmDirective extends MDirective {
  @Input('me_sm') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'sm'
    this.breakpoint = BreakPoints.sm
    this.type = 'me'
  }
}

@Directive({
  selector: '[me_md]'
})
export class MeMdDirective extends MDirective {
  @Input('me_md') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'md'
    this.breakpoint = BreakPoints.md
    this.type = 'me'
  }
}

@Directive({
  selector: '[me_lg]'
})
export class MeLgDirective extends MDirective {
  @Input('me_lg') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'lg'
    this.breakpoint = BreakPoints.lg
    this.type = 'me'
  }
}


@Directive({
  selector: '[me_xl]'
})
export class MeXlDirective extends MDirective {
  @Input('me_xl') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xl'
    this.breakpoint = BreakPoints.xl
    this.type = 'me'
  }
}


@Directive({
  selector: '[me_xxl]'
})
export class MeXxlDirective extends MDirective {
  @Input('me_xxl') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xxl'
    this.breakpoint = BreakPoints.xxl
    this.type = 'me'
  }
}


@Directive({
  selector: '[mx]'
})
export class MxDirective extends MDirective {
  @Input('mx') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'default'
    this.breakpoint = 0
    this.type = 'mx'
  }
}

@Directive({
  selector: '[mx_sm]'
})
export class MxSmDirective extends MDirective {
  @Input('mx_sm') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'sm'
    this.breakpoint = BreakPoints.sm
    this.type = 'mx'
  }
}

@Directive({
  selector: '[mx_md]'
})
export class MxMdDirective extends MDirective {
  @Input('mx_md') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'md'
    this.breakpoint = BreakPoints.md
    this.type = 'mx'
  }
}

@Directive({
  selector: '[mx_lg]'
})
export class MxLgDirective extends MDirective {
  @Input('mx_lg') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'lg'
    this.breakpoint = BreakPoints.lg
    this.type = 'mx'
  }
}

@Directive({
  selector: '[mx_xl]'
})
export class MxXlDirective extends MDirective {
  @Input('mx_xl') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xl'
    this.breakpoint = BreakPoints.xl
    this.type = 'mx'
  }
}

@Directive({
  selector: '[mx_xxl]'
})
export class MxXxlDirective extends MDirective {
  @Input('mx_xxl') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xxl'
    this.breakpoint = BreakPoints.xxl
    this.type = 'mx'
  }
}


@Directive({
  selector: '[my]'
})
export class MyDirective extends MDirective {
  @Input('my') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'default'
    this.breakpoint = 0
    this.type = 'my'
  }
}

@Directive({
  selector: '[my_sm]'
})
export class MySmDirective extends MDirective {
  @Input('my_sm') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'sm'
    this.breakpoint = BreakPoints.sm
    this.type = 'my'
  }
}

@Directive({
  selector: '[my_md]'
})
export class MyMdDirective extends MDirective {
  @Input('my_md') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'md'
    this.breakpoint = BreakPoints.md
    this.type = 'my'
  }
}

@Directive({
  selector: '[my_lg]'
})
export class MyLgDirective extends MDirective {
  @Input('my_lg') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'lg'
    this.breakpoint = BreakPoints.lg
    this.type = 'my'
  }
}

@Directive({
  selector: '[my_xl]'
})
export class MyXlDirective extends MDirective {
  @Input('my_xl') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xl'
    this.breakpoint = BreakPoints.xl
    this.type = 'my'
  }
}

@Directive({
  selector: '[my_xxl]'
})
export class MyXxlDirective extends MDirective {
  @Input('my_xxl') size: MarginSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xxl'
    this.breakpoint = BreakPoints.xxl
    this.type = 'my'
  }
}

export const MarginDirectives = [
  // m
  MDirective,
  MSmDirective,
  MMdDirective,
  MLgDirective,
  MXlDirective,
  MXxlDirective,
  // mt
  MtDirective,
  MtSmDirective,
  MtMdDirective,
  MtLgDirective,
  MtXlDirective,
  MtXxlDirective,
  // mb
  MbDirective,
  MbSmDirective,
  MbMdDirective,
  MbLgDirective,
  MbXlDirective,
  MbXxlDirective,
  // ms
  MsDirective,
  MsSmDirective,
  MsMdDirective,
  MsLgDirective,
  MsXlDirective,
  MsXxlDirective,
  // me
  MeDirective,
  MeSmDirective,
  MeMdDirective,
  MeLgDirective,
  MeXlDirective,
  MeXxlDirective,
  // mx
  MxDirective,
  MxSmDirective,
  MxMdDirective,
  MxLgDirective,
  MxXlDirective,
  MxXxlDirective,
  // my
  MyDirective,
  MySmDirective,
  MyMdDirective,
  MyLgDirective,
  MyXlDirective,
  MyXxlDirective,
]
