import {Directive, ElementRef, HostBinding, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';
import {BreakPoints, insertElementStyle, isGapClass, BootstrapGapSize, toGapClass} from 'monsta-design/core';
import {isNumeric} from "rxjs/internal-compatibility";

type PaddingType = 'p' | 'pt' | 'pb' | 'ps' | 'pe' | 'px' | 'py'

export class PaddingStyle {
  media: string
  breakpoint: number
  size: any
  type: PaddingType
}

// 插入 Angular element padding style
export function insertPaddingElementStyle(target: Element, container: HTMLElement, renderer: Renderer2, style: PaddingStyle) {
  if (isNumeric(style.size)) {
    style.size += 'px'
  }
  insertElementStyle(target, container, renderer, {
    name: `p_${style.type}`,
    media: style.media,
    breakpoint: style.breakpoint,
    cssGetter: (scope: string): string => {
      switch (style.type) {
        case 'pt':
          return `
          #${scope}{
              padding-top: ${style.size};
          }`
        case 'pb':
          return `
          #${scope}{
              padding-bottom: ${style.size};
          }`
        case 'ps':
          return `
          #${scope}{
              padding-left: ${style.size};
          }`
        case 'pe':
          return `
          #${scope}{
              padding-right: ${style.size};
          }`
        case 'px':
          return `
          #${scope}{
              padding-left: ${style.size};
              padding-right: ${style.size};
          }`
        case 'py':
          return `
          #${scope}{
              padding-top: ${style.size};
              padding-bottom: ${style.size};
          }`
        default:
          return `
          #${scope}{
              padding: ${style.size};
          }`
      }
    }
  })
}

export  type PaddingSize = BootstrapGapSize | number | string

@Directive({
  selector: '[p]'
})
export class PDirective implements OnChanges {
  @Input('p') size: PaddingSize
  protected media: string = 'default'
  protected breakpoint: number = 0
  protected type: PaddingType = 'p'

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

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (isGapClass(this.size)) {
      return
    }
    this.insertStyle()
  }

  insertStyle() {
    insertPaddingElementStyle(
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
  selector: '[p_sm]'
})
export class PSmDirective extends PDirective {
  @Input('p_sm') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'sm'
    this.breakpoint = BreakPoints.sm
    this.type = 'p'
  }
}

@Directive({
  selector: '[p_md]'
})
export class PPdDirective extends PDirective {
  @Input('p_md') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'md'
    this.breakpoint = BreakPoints.md
    this.type = 'p'
  }
}

@Directive({
  selector: '[p_lg]'
})
export class PLgDirective extends PDirective {
  @Input('p_lg') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'lg'
    this.breakpoint = BreakPoints.lg
    this.type = 'p'
  }
}

@Directive({
  selector: '[p_xl]'
})
export class PXlDirective extends PDirective {
  @Input('p_xl') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xl'
    this.breakpoint = BreakPoints.xl
    this.type = 'p'
  }
}

@Directive({
  selector: '[p_xxl]'
})
export class PXxlDirective extends PDirective {
  @Input('p_xxl') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xxl'
    this.breakpoint = BreakPoints.xxl
    this.type = 'p'
  }
}

@Directive({
  selector: '[pt]'
})
export class PtDirective extends PDirective {
  @Input('pt') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'default'
    this.breakpoint = 0
    this.type = 'pt'
  }
}

@Directive({
  selector: '[pt_sm]'
})
export class PtSmDirective extends PDirective {
  @Input('pt_sm') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'sm'
    this.breakpoint = BreakPoints.sm
    this.type = 'pt'
  }
}

@Directive({
  selector: '[pt_md]'
})
export class PtPdDirective extends PDirective {
  @Input('pt_md') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'md'
    this.breakpoint = BreakPoints.md
    this.type = 'pt'
  }
}

@Directive({
  selector: '[pt_lg]'
})
export class PtLgDirective extends PDirective {
  @Input('pt_lg') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'lg'
    this.breakpoint = BreakPoints.lg
    this.type = 'pt'
  }
}

@Directive({
  selector: '[pt_xl]'
})
export class PtXlDirective extends PDirective {
  @Input('pt_xl') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xl'
    this.breakpoint = BreakPoints.xl
    this.type = 'pt'
  }
}

@Directive({
  selector: '[pt_xxl]'
})
export class PtXxlDirective extends PDirective {
  @Input('pt_xxl') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xxl'
    this.breakpoint = BreakPoints.xxl
    this.type = 'pt'
  }
}

@Directive({
  selector: '[pb]'
})
export class PbDirective extends PDirective {
  @Input('pb') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'default'
    this.breakpoint = 0
    this.type = 'pb'
  }
}

@Directive({
  selector: '[pb_sm]'
})
export class PbSmDirective extends PDirective {
  @Input('pb_sm') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'sm'
    this.breakpoint = BreakPoints.sm
    this.type = 'pb'
  }
}

@Directive({
  selector: '[pb_md]'
})
export class PbPdDirective extends PDirective {
  @Input('pb_md') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'md'
    this.breakpoint = BreakPoints.md
    this.type = 'pb'
  }
}

@Directive({
  selector: '[pb_lg]'
})
export class PbLgDirective extends PDirective {
  @Input('pb_lg') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'lg'
    this.breakpoint = BreakPoints.lg
    this.type = 'pb'
  }
}

@Directive({
  selector: '[pb_xl]'
})
export class PbXlDirective extends PDirective {
  @Input('pb_xl') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xl'
    this.breakpoint = BreakPoints.xl
    this.type = 'pb'
  }
}

@Directive({
  selector: '[pb_xxl]'
})
export class PbXxlDirective extends PDirective {
  @Input('pb_xxl') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xxl'
    this.breakpoint = BreakPoints.xxl
    this.type = 'pb'
  }
}


@Directive({
  selector: '[ps]'
})
export class PsDirective extends PDirective {
  @Input('ps') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'default'
    this.breakpoint = 0
    this.type = 'ps'
  }
}

@Directive({
  selector: '[ps_sm]'
})
export class PsSmDirective extends PDirective {
  @Input('ps_sm') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'sm'
    this.breakpoint = BreakPoints.sm
    this.type = 'ps'
  }
}

@Directive({
  selector: '[ps_md]'
})
export class PsPdDirective extends PDirective {
  @Input('ps_md') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'md'
    this.breakpoint = BreakPoints.md
    this.type = 'ps'
  }
}

@Directive({
  selector: '[ps_lg]'
})
export class PsLgDirective extends PDirective {
  @Input('ps_lg') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'lg'
    this.breakpoint = BreakPoints.lg
    this.type = 'ps'
  }
}

@Directive({
  selector: '[ps_xl]'
})
export class PsXlDirective extends PDirective {
  @Input('ps_xl') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xl'
    this.breakpoint = BreakPoints.xl
    this.type = 'ps'
  }
}

@Directive({
  selector: '[ps_xxl]'
})
export class PsXxlDirective extends PDirective {
  @Input('ps_xxl') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xxl'
    this.breakpoint = BreakPoints.xxl
    this.type = 'ps'
  }
}


@Directive({
  selector: '[pe]'
})
export class PeDirective extends PDirective {
  @Input('pe') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'default'
    this.breakpoint = 0
    this.type = 'pe'
  }
}

@Directive({
  selector: '[me_sm]'
})
export class PeSmDirective extends PDirective {
  @Input('me_sm') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'sm'
    this.breakpoint = BreakPoints.sm
    this.type = 'pe'
  }
}

@Directive({
  selector: '[me_md]'
})
export class PePdDirective extends PDirective {
  @Input('me_md') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'md'
    this.breakpoint = BreakPoints.md
    this.type = 'pe'
  }
}

@Directive({
  selector: '[me_lg]'
})
export class PeLgDirective extends PDirective {
  @Input('me_lg') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'lg'
    this.breakpoint = BreakPoints.lg
    this.type = 'pe'
  }
}


@Directive({
  selector: '[me_xl]'
})
export class PeXlDirective extends PDirective {
  @Input('me_xl') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xl'
    this.breakpoint = BreakPoints.xl
    this.type = 'pe'
  }
}


@Directive({
  selector: '[me_xxl]'
})
export class PeXxlDirective extends PDirective {
  @Input('me_xxl') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xxl'
    this.breakpoint = BreakPoints.xxl
    this.type = 'pe'
  }
}


@Directive({
  selector: '[px]'
})
export class PxDirective extends PDirective {
  @Input('px') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'default'
    this.breakpoint = 0
    this.type = 'px'
  }
}

@Directive({
  selector: '[mx_sm]'
})
export class PxSmDirective extends PDirective {
  @Input('mx_sm') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'sm'
    this.breakpoint = BreakPoints.sm
    this.type = 'px'
  }
}

@Directive({
  selector: '[mx_md]'
})
export class PxPdDirective extends PDirective {
  @Input('mx_md') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'md'
    this.breakpoint = BreakPoints.md
    this.type = 'px'
  }
}

@Directive({
  selector: '[mx_lg]'
})
export class PxLgDirective extends PDirective {
  @Input('mx_lg') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'lg'
    this.breakpoint = BreakPoints.lg
    this.type = 'px'
  }
}

@Directive({
  selector: '[mx_xl]'
})
export class PxXlDirective extends PDirective {
  @Input('mx_xl') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xl'
    this.breakpoint = BreakPoints.xl
    this.type = 'px'
  }
}

@Directive({
  selector: '[mx_xxl]'
})
export class PxXxlDirective extends PDirective {
  @Input('mx_xxl') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xxl'
    this.breakpoint = BreakPoints.xxl
    this.type = 'px'
  }
}


@Directive({
  selector: '[py]'
})
export class PyDirective extends PDirective {
  @Input('py') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'default'
    this.breakpoint = 0
    this.type = 'py'
  }
}

@Directive({
  selector: '[py_sm]'
})
export class PySmDirective extends PDirective {
  @Input('py_sm') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'sm'
    this.breakpoint = BreakPoints.sm
    this.type = 'py'
  }
}

@Directive({
  selector: '[py_md]'
})
export class PyPdDirective extends PDirective {
  @Input('py_md') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'md'
    this.breakpoint = BreakPoints.md
    this.type = 'py'
  }
}

@Directive({
  selector: '[py_lg]'
})
export class PyLgDirective extends PDirective {
  @Input('py_lg') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'lg'
    this.breakpoint = BreakPoints.lg
    this.type = 'py'
  }
}

@Directive({
  selector: '[py_xl]'
})
export class PyXlDirective extends PDirective {
  @Input('py_xl') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xl'
    this.breakpoint = BreakPoints.xl
    this.type = 'py'
  }
}

@Directive({
  selector: '[py_xxl]'
})
export class PyXxlDirective extends PDirective {
  @Input('py_xxl') size: PaddingSize

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
  ) {
    super(el, renderer)
    this.media = 'xxl'
    this.breakpoint = BreakPoints.xxl
    this.type = 'py'
  }
}

export const PaddingDirectives = [
  // m
  PDirective,
  PSmDirective,
  PPdDirective,
  PLgDirective,
  PXlDirective,
  PXxlDirective,
  // pt
  PtDirective,
  PtSmDirective,
  PtPdDirective,
  PtLgDirective,
  PtXlDirective,
  PtXxlDirective,
  // pb
  PbDirective,
  PbSmDirective,
  PbPdDirective,
  PbLgDirective,
  PbXlDirective,
  PbXxlDirective,
  // ps
  PsDirective,
  PsSmDirective,
  PsPdDirective,
  PsLgDirective,
  PsXlDirective,
  PsXxlDirective,
  // pe
  PeDirective,
  PeSmDirective,
  PePdDirective,
  PeLgDirective,
  PeXlDirective,
  PeXxlDirective,
  // px
  PxDirective,
  PxSmDirective,
  PxPdDirective,
  PxLgDirective,
  PxXlDirective,
  PxXxlDirective,
  // py
  PyDirective,
  PySmDirective,
  PyPdDirective,
  PyLgDirective,
  PyXlDirective,
  PyXxlDirective,
]
