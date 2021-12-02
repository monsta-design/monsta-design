import {
  APP_ID,
  ComponentRef,
  Directive,
  ElementRef,
  Host,
  HostBinding, Inject, InjectionToken, Injector,
  Input, OnChanges,
  OnDestroy,
  OnInit,
  ReflectiveKey, Renderer2, SimpleChanges, ViewContainerRef
} from '@angular/core';
import {isSpacingSize, MediaBreakPoints, SpacingSize} from "layout/utils";

@Directive({
  selector: '[g]'
})
export class GDirective {
  @Input('g') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isSpacingSize(this.size)) {
      return 'bs-g-' + this.size
    }
    return false
  }

  @HostBinding('style.--bs-gutter-x')
  get x() {
    if (!isSpacingSize(this.size)) {
      return this.size
    }
    return null
  }

  @HostBinding('style.--bs-gutter-y')
  get y() {
    if (!isSpacingSize(this.size)) {
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
    if (isSpacingSize(this.size)) {
      return 'bs-gx-' + this.size
    }
    return null
  }

  @HostBinding('style.--bs-gutter-x')
  get style() {
    if (!isSpacingSize(this.size)) {
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
    if (isSpacingSize(this.size)) {
      return 'bs-gy-' + this.size
    }
    return false
  }

  @HostBinding('style.--bs-gutter-y')
  get style() {
    if (!isSpacingSize(this.size)) {
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
    if (isSpacingSize(this.size)) {
      return 'bs-g-sm-' + this.size
    }
    return false
  }

  @HostBinding('style.--bs-gutter-x')
  get x() {
    if (!isSpacingSize(this.size)) {
      return this.size
    }
    return null
  }

  @HostBinding('style.--bs-gutter-y')
  get y() {
    if (!isSpacingSize(this.size)) {
      return this.size
    }
    return null
  }

}

@Directive({
  selector: '[gx_sm]'
})
export class GXSMDirective implements OnInit {
  @Input('gx_sm') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isSpacingSize(this.size)) {
      return 'bs-gx-sm-' + this.size
    }
    return null
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (isSpacingSize(this.size)) {
      return
    }
    let style = this.renderer.createElement('style')
    // @ts-ignore
    const attr = this.renderer.hostAttr
    style.innerHTML = `@media (min-width: ${MediaBreakPoints.sm}px){
    [${attr}] {
          --bs-gutter-x: ${this.size};
        }
    }`
    this.renderer.insertBefore(this.el.nativeElement.parentElement, style, this.el.nativeElement)
  }
}

@Directive({
  selector: '[gx_md]'
})
export class GXMDDirective implements OnInit, OnChanges {
  @Input('gx_md') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isSpacingSize(this.size)) {
      return 'bs-gx-md-' + this.size
    }
    return null
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (isSpacingSize(this.size)) {
      return
    }
    let style = this.renderer.createElement('style')
    // @ts-ignore
    const attr = this.renderer.hostAttr
    style.innerHTML = `@media (min-width: ${MediaBreakPoints.md}px){
    [${attr}] {
          --bs-gutter-x: ${this.size} !important;
        }
    }`
    this.renderer.insertBefore(this.el.nativeElement.parentElement, style, this.el.nativeElement)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log(this.size)
  }
}


export const GutterDirectives = [
  GDirective,
  GXDirective,
  GYDirective,
  GSMDirective,
  GXSMDirective,
  GXMDDirective,
]
