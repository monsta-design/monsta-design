import {
  AfterContentInit,
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges
} from '@angular/core';
import {isNumeric} from "rxjs/internal-compatibility";
import {
  BreakPoints,
  FlexAlignSelfMode,
  NSGapSize,
  insertElementStyle,
  isGapClass,
  toGapClass
} from 'monsta-design/core';

export class GupStyle {
  media: string
  breakpoint: number
  gap: any
}

// 插入 Angular element gap style
export function insertGapElementStyle(target: Element, container: HTMLElement, renderer: Renderer2, style: GupStyle) {
  if (isNumeric(style.gap)) {
    style.gap += 'px'
  }
  insertElementStyle(target, container, renderer, {
    name: `gap`,
    media: style.media,
    breakpoint: style.breakpoint,
    cssGetter: (scope: string): string => {
      return `
      #${scope} {
        gap: ${style.gap} !important;
      }
      `
    }
  })
}

@Directive({
  selector: '[gap]',
})
export class GapDirective implements OnChanges {
  @Input('gap') gap: NSGapSize;
  protected media: string = 'default';
  protected breakpoint: number = 0;

  @HostBinding('class') get getClass() {
    if (isGapClass(this.gap)) {
      if (this.media !== 'default') {
        return `bs-gap-${this.media}-${toGapClass(this.gap)}`
      }
      return `bs-gap-${toGapClass(this.gap)}`
    }
    return null
  }

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
  }

  ngOnInit() {
    if (!isGapClass(this.gap)) {
      return
    }
    this.insertStyle()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.insertStyle()
  }

  insertStyle() {
    insertGapElementStyle(
      this.el.nativeElement,
      this.el.nativeElement.parentElement,
      this.renderer,
      {
        media: this.media,
        breakpoint: this.breakpoint,
        gap: this.gap
      },
    )
  }
}

@Directive({
  selector: '[gap_sm]',
})
export class GapSmDirective extends GapDirective {
  @Input('gap_sm') gap: NSGapSize;

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer)
    this.media = 'sm'
    this.breakpoint = BreakPoints.sm
  }
}

@Directive({
  selector: '[gap_md]',
})
export class GapMdDirective extends GapDirective {
  @Input('gap_md') gap: NSGapSize;

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer)
    this.media = 'md'
    this.breakpoint = BreakPoints.md
  }
}

@Directive({
  selector: '[gap_lg]',
})
export class GapLgDirective extends GapDirective {
  @Input('gap_lg') gap: NSGapSize;

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer)
    this.media = 'lg'
    this.breakpoint = BreakPoints.lg
  }
}

@Directive({
  selector: '[gap_xl]',
})
export class GapXlDirective extends GapDirective {
  @Input('gap_xl') gap: NSGapSize;

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer)
    this.media = 'xl'
    this.breakpoint = BreakPoints.xl
  }
}

@Directive({
  selector: '[gap_xxl]',
})
export class GapXxlDirective extends GapDirective {
  @Input('gap_xxl') gap: NSGapSize;

  constructor(protected el: ElementRef, protected renderer: Renderer2) {
    super(el, renderer)
    this.media = 'xxl'
    this.breakpoint = BreakPoints.xxl
  }
}

export const GapDirectives = [
  GapDirective,
  GapSmDirective,
  GapMdDirective,
  GapLgDirective,
  GapXlDirective,
  GapXxlDirective,
]
