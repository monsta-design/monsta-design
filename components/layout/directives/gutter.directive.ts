import {Directive, ElementRef, HostBinding, Input, OnChanges, OnInit, Renderer2, SimpleChanges,} from '@angular/core';
import {ElementStyle, insertGutterElementStyle, isDefaultSpacingSize, MediaBreakPoints, SpacingSize} from "../utils";

@Directive({
  selector: '[g]'
})
export class GDirective {
  @Input('g') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-g-' + this.size
    }
    return false
  }

  @HostBinding('style.--bs-gutter-x')
  get x() {
    if (!isDefaultSpacingSize(this.size)) {
      return this.size
    }
    return null
  }

  @HostBinding('style.--bs-gutter-y')
  get y() {
    if (!isDefaultSpacingSize(this.size)) {
      return this.size
    }
    return null
  }
}

@Directive({
  selector: '[gx]'
})
export class GXDirective {
  @Input('gx') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-gx-' + this.size
    }
    return null
  }

  @HostBinding('style.--bs-gutter-x')
  get style() {
    if (!isDefaultSpacingSize(this.size)) {
      return this.size
    }
    return null
  }
}

@Directive({
  selector: '[gy]'
})
export class GYDirective {
  @Input('gy') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-gy-' + this.size
    }
    return false
  }

  @HostBinding('style.--bs-gutter-y')
  get style() {
    if (!isDefaultSpacingSize(this.size)) {
      return this.size
    }
    return false
  }
}

@Directive({
  selector: '[g_sm]'
})
export class GSMDirective {
  @Input('g_sm') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-g-sm-' + this.size
    }
    return false
  }

  @HostBinding('style.--bs-gutter-x')
  get x() {
    if (!isDefaultSpacingSize(this.size)) {
      return this.size
    }
    return null
  }

  @HostBinding('style.--bs-gutter-y')
  get y() {
    if (!isDefaultSpacingSize(this.size)) {
      return this.size
    }
    return null
  }

}

@Directive({
  selector: '[gx_sm]'
})
export class GXSMDirective implements OnInit, OnChanges {
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
      },
    )
  }
}

@Directive({
  selector: '[gx_md]'
})
export class GXMDDirective implements OnInit, OnChanges {
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
      },
    )
  }
}

@Directive({
  selector: '[gx_lg]'
})
export class GXLGDirective implements OnInit, OnChanges {
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
      },
    )
  }
}

@Directive({
  selector: '[gx_xl]'
})
export class GXXLDirective implements OnInit, OnChanges {
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
      },
    )
  }
}

@Directive({
  selector: '[gx_xxl]'
})
export class GXXXLDirective implements OnInit, OnChanges {
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
      },
    )
  }
}


export const GutterDirectives = [
  GDirective,
  GXDirective,
  GYDirective,
  GSMDirective,
  GXSMDirective,
  GXMDDirective,
  GXLGDirective,
  GXXLDirective,
  GXXXLDirective,
]
