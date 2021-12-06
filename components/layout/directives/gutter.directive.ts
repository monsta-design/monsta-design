import {Directive, ElementRef, HostBinding, Input, OnChanges, OnInit, Renderer2, SimpleChanges,} from '@angular/core';
import {insertGutterElementStyle, isDefaultSpacingSize, MediaBreakPoints, SpacingSize} from "../utils";

@Directive({
  selector: '[g]'
})
export class GDirective implements OnChanges {
  @Input('g') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-g-' + this.size
    }
    return false
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (isDefaultSpacingSize(this.size)) {
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
        size: 'default',
        breakpoint: 0,
        gutter: this.size,
        type: 'xy',
      },
    )
  }
}

@Directive({
  selector: '[g_sm]'
})
export class GSMDirective implements OnChanges {
  @Input('g_sm') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-g-sm-' + this.size
    }
    return false
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (isDefaultSpacingSize(this.size)) {
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
        size: 'sm',
        breakpoint: MediaBreakPoints.sm,
        gutter: this.size,
        type: 'xy',
      },
    )
  }
}

@Directive({
  selector: '[g_md]'
})
export class GMDDirective implements OnChanges {
  @Input('g_md') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-g-md-' + this.size
    }
    return false
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (isDefaultSpacingSize(this.size)) {
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
        size: 'md',
        breakpoint: MediaBreakPoints.md,
        gutter: this.size,
        type: 'xy',
      },
    )
  }
}

@Directive({
  selector: '[g_lg]'
})
export class GLGDirective implements OnChanges {
  @Input('g_lg') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-g-lg-' + this.size
    }
    return false
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (isDefaultSpacingSize(this.size)) {
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
        size: 'lg',
        breakpoint: MediaBreakPoints.lg,
        gutter: this.size,
        type: 'xy',
      },
    )
  }
}

@Directive({
  selector: '[g_xl]'
})
export class GXLDirective implements OnChanges {
  @Input('g_xl') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-g-xl-' + this.size
    }
    return false
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (isDefaultSpacingSize(this.size)) {
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
        size: 'xl',
        breakpoint: MediaBreakPoints.xl,
        gutter: this.size,
        type: 'xy',
      },
    )
  }
}

@Directive({
  selector: '[g_xxl]'
})
export class GXXLDirective implements OnChanges {
  @Input('g_xxl') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-g-xxl-' + this.size
    }
    return false
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (isDefaultSpacingSize(this.size)) {
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
        size: 'xxl',
        breakpoint: MediaBreakPoints.xxl,
        gutter: this.size,
        type: 'xy',
      },
    )
  }
}


@Directive({
  selector: '[gx]'
})
export class GxDirective implements OnChanges {
  @Input('gx') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-gx-' + this.size
    }
    return null
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (isDefaultSpacingSize(this.size)) {
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
        size: 'default',
        breakpoint: 0,
        gutter: this.size,
        type: 'x',
      },
    )
  }
}


@Directive({
  selector: '[gx_sm]'
})
export class GxSMDirective implements OnInit, OnChanges {
  @Input('gx_sm') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-gx-sm-' + this.size
    }
    return null
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (isDefaultSpacingSize(this.size)) {
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
        size: 'sm',
        breakpoint: MediaBreakPoints.sm,
        gutter: this.size,
        type: 'x',
      },
    )
  }
}

@Directive({
  selector: '[gx_md]'
})
export class GxMDDirective implements OnInit, OnChanges {
  @Input('gx_md') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-gx-md-' + this.size
    }
    return null
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (isDefaultSpacingSize(this.size)) {
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
        size: 'md',
        breakpoint: MediaBreakPoints.md,
        gutter: this.size,
        type: 'x',
      },
    )
  }
}

@Directive({
  selector: '[gx_lg]'
})
export class GxLGDirective implements OnInit, OnChanges {
  @Input('gx_lg') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-gx-lg-' + this.size
    }
    return null
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (isDefaultSpacingSize(this.size)) {
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
        size: 'lg',
        breakpoint: MediaBreakPoints.lg,
        gutter: this.size,
        type: 'x',
      },
    )
  }
}

@Directive({
  selector: '[gx_xl]'
})
export class GxXLDirective implements OnInit, OnChanges {
  @Input('gx_xl') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-gx-xl-' + this.size
    }
    return null
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (isDefaultSpacingSize(this.size)) {
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
        size: 'xl',
        breakpoint: MediaBreakPoints.xl,
        gutter: this.size,
        type: 'x',
      },
    )
  }
}

@Directive({
  selector: '[gx_xxl]'
})
export class GxXXLDirective implements OnInit, OnChanges {
  @Input('gx_xxl') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-gx-xxl-' + this.size
    }
    return null
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (isDefaultSpacingSize(this.size)) {
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
        size: 'xxl',
        breakpoint: MediaBreakPoints.xxl,
        gutter: this.size,
        type: 'x',
      },
    )
  }
}

@Directive({
  selector: '[gy]'
})
export class GyDirective implements OnChanges {
  @Input('gy') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-gy-' + this.size
    }
    return null
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (isDefaultSpacingSize(this.size)) {
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
        size: 'default',
        breakpoint: 0,
        gutter: this.size,
        type: 'y',
      },
    )
  }
}


@Directive({
  selector: '[gy_sm]'
})
export class GySMDirective implements OnInit, OnChanges {
  @Input('gy_sm') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-gy-sm-' + this.size
    }
    return null
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (isDefaultSpacingSize(this.size)) {
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
        size: 'sm',
        breakpoint: MediaBreakPoints.sm,
        gutter: this.size,
        type: 'y',
      },
    )
  }
}

@Directive({
  selector: '[gx_md]'
})
export class GyMDDirective implements OnInit, OnChanges {
  @Input('gy_md') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-gy-md-' + this.size
    }
    return null
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (isDefaultSpacingSize(this.size)) {
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
        size: 'md',
        breakpoint: MediaBreakPoints.md,
        gutter: this.size,
        type: 'y',
      },
    )
  }
}

@Directive({
  selector: '[gy_lg]'
})
export class GyLGDirective implements OnInit, OnChanges {
  @Input('gy_lg') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-gy-lg-' + this.size
    }
    return null
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (isDefaultSpacingSize(this.size)) {
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
        size: 'lg',
        breakpoint: MediaBreakPoints.lg,
        gutter: this.size,
        type: 'y',
      },
    )
  }
}

@Directive({
  selector: '[gy_xl]'
})
export class GyXLDirective implements OnInit, OnChanges {
  @Input('gy_xl') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-gy-xl-' + this.size
    }
    return null
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (isDefaultSpacingSize(this.size)) {
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
        size: 'xl',
        breakpoint: MediaBreakPoints.xl,
        gutter: this.size,
        type: 'y',
      },
    )
  }
}

@Directive({
  selector: '[gy_xxl]'
})
export class GyXXLDirective implements OnInit, OnChanges {
  @Input('gy_xxl') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-gy-xxl-' + this.size
    }
    return null
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (isDefaultSpacingSize(this.size)) {
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
        size: 'xxl',
        breakpoint: MediaBreakPoints.xxl,
        gutter: this.size,
        type: 'y',
      },
    )
  }
}

export const GutterDirectives = [
  GDirective,
  GSMDirective,
  GMDDirective,
  GLGDirective,
  GXLDirective,
  GXXLDirective,
  GxDirective,
  GxSMDirective,
  GxMDDirective,
  GxLGDirective,
  GxXLDirective,
  GxXXLDirective,
  GyDirective,
  GySMDirective,
  GyMDDirective,
  GyLGDirective,
  GyXLDirective,
  GyXXLDirective,
]
