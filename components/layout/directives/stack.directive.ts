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
import {BreakPoints, FlexAlignSelfMode, insertElementStyle, isGapClass} from 'monsta-design/core';

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
    if (isGapClass(this.gap)) {
      return 'bs-gap-' + this.gap
    }
    return null
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
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
        media: 'default',
        breakpoint: 0,
        gap: this.gap
      },
    )
  }
}

export const StackDirectives = [
  VStackDirective,
  HStackDirective,
  VRDirective,
]
