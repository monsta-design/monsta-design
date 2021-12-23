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
import {BreakPoints, FlexAlignSelfMode, insertElementStyle} from 'monsta-design/core';

export class GupStyle {
  media: string
  breakpoint: number
  gap: any
}

// 插入 Angular element gap style
export function insertGapElementStyle(target: Element, container: HTMLElement, renderer: Renderer2, style: GupStyle) {
  insertElementStyle(target, container, renderer, {
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

function insertVrs(elem: Element, children: Element[], value: FlexAlignSelfMode, hr?: boolean) {
  for (let i = 0; i < children.length - 1; i++) {
    let span = document.createElement("span");
    if (hr) {
      span.classList.add('ns-hr')
    } else {
      span.classList.add('bs-vr')
    }
    if (value !== 'stretch') {
      span.style.setProperty('align-self', value)
    }
    elem.insertBefore(span, children[i + 1])
  }
}

@Directive({
  selector: '[h_stack]',
  host: {
    class: 'bs-hstack'
  }
})
export class HStackDirective implements AfterContentInit {
  @Input() h_stack: FlexAlignSelfMode = '';

  constructor(private el: ElementRef) {
  }

  ngAfterContentInit() {
    if (this.h_stack === '') {
      return
    }
    insertVrs(this.el.nativeElement, [...this.el.nativeElement.children], this.h_stack)
  }
}

@Directive({
  selector: '[v_stack]',
  host: {
    class: 'bs-vstack'
  }
})
export class VStackDirective implements AfterContentInit {
  @Input() v_stack: FlexAlignSelfMode = '';

  constructor(private el: ElementRef) {
  }

  ngAfterContentInit() {
    if (this.v_stack === '') {
      return
    }
    insertVrs(this.el.nativeElement, [...this.el.nativeElement.children], this.v_stack, true)
  }
}

@Directive({
  selector: '[vr]',
  host: {
    class: 'bs-vr'
  }
})
export class VRDirective {
  @Input() _vr: FlexAlignSelfMode | '' = "stretch"

  @HostBinding('style.align-self') get getAlignSelf() {
    if (this._vr === '') {
      this._vr = "stretch"
    }
    return this._vr
  }
}

@Directive({
  selector: '[gap]',
})
export class GapDirective implements OnChanges {
  @Input('gap') gap: number | string;

  @HostBinding('class') get getClass() {
    if (this.gap !== null && isNumeric(this.gap)) {
      return 'bs-gap-' + this.gap
    }
    return null
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (this.gap === null || isNumeric(this.gap)) {
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
        media: 'default',
        breakpoint: 0,
        gap: this.gap
      },
    )
  }
}

@Directive({
  selector: '[gap_sm]',
})
export class GapSmDirective implements OnChanges {
  @Input('gap_sm') gap: number | string;

  @HostBinding('class') get getClass() {
    if (this.gap !== null && isNumeric(this.gap)) {
      return 'bs-gap-sm-' + this.gap
    }
    return null
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (this.gap === null || isNumeric(this.gap)) {
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
        media: 'sm',
        breakpoint: BreakPoints.sm,
        gap: this.gap
      },
    )
  }
}

@Directive({
  selector: '[gap_md]',
})
export class GapMdDirective implements OnChanges {
  @Input('gap_md') gap: number | string;

  @HostBinding('class') get getClass() {
    if (this.gap !== null && isNumeric(this.gap)) {
      return 'bs-gap-md-' + this.gap
    }
    return null
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (this.gap === null || isNumeric(this.gap)) {
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
        media: 'md',
        breakpoint: BreakPoints.md,
        gap: this.gap
      },
    )
  }
}

@Directive({
  selector: '[gap_lg]',
})
export class GapLgDirective implements OnChanges {
  @Input('gap_lg') gap: number | string;

  @HostBinding('class') get getClass() {
    if (this.gap !== null && isNumeric(this.gap)) {
      return 'bs-gap-lg-' + this.gap
    }
    return null
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (this.gap === null || isNumeric(this.gap)) {
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
        media: 'lg',
        breakpoint: BreakPoints.lg,
        gap: this.gap
      },
    )
  }
}

@Directive({
  selector: '[gap_xl]',
})
export class GapXlDirective implements OnChanges {
  @Input('gap_xl') gap: number | string;

  @HostBinding('class') get getClass() {
    if (this.gap !== null && isNumeric(this.gap)) {
      return 'bs-gap-xl-' + this.gap
    }
    return null
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (this.gap === null || isNumeric(this.gap)) {
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
        media: 'xl',
        breakpoint: BreakPoints.xl,
        gap: this.gap
      },
    )
  }
}

@Directive({
  selector: '[gap_xxl]',
})
export class GapXxlDirective implements OnChanges {
  @Input('gap_xxl') gap: number | string;

  @HostBinding('class') get getClass() {
    if (this.gap !== null && isNumeric(this.gap)) {
      return 'bs-gap-xxl-' + this.gap
    }
    return null
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    if (this.gap === null || isNumeric(this.gap)) {
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
        media: 'xxl',
        breakpoint: BreakPoints.xxl,
        gap: this.gap
      },
    )
  }
}

export const StackDirectives = [
  VStackDirective,
  HStackDirective,
  VRDirective,
  GapDirective,
  GapSmDirective,
  GapMdDirective,
  GapLgDirective,
  GapXlDirective,
  GapXxlDirective,
]
