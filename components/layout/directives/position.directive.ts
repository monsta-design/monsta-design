import {Directive, HostBinding, Input} from '@angular/core';
import {isNumeric} from "rxjs/internal-compatibility";

@Directive({
  selector: '[pos]',
})
export class PositionDirective {
  @Input('pos') position: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky' = null;

  @HostBinding('class')
  get class() {
    if (this.position != null) {
      return 'bs-position-' + this.position
    }
    return null
  }
}

@Directive({
  selector: '[t]',
})
export class TopDirective {
  @Input('t') d: 0 | 50 | 100 | string = null;

  @HostBinding('class')
  get class() {
    if (isNumeric(this.d)) {
      return 'bs-top-' + this.d
    }
    return null
  }
}

@Directive({
  selector: '[b]',
})
export class BottomDirective {
  @Input('b') d: 0 | 50 | 100 | string = null;

  @HostBinding('class')
  get class() {
    if (isNumeric(this.d)) {
      return 'bs-bottom-' + this.d
    }
    return null
  }
}

@Directive({
  selector: '[s]',
})
export class StartDirective {
  @Input('s') d: 0 | 50 | 100 | string = null;

  @HostBinding('class')
  get class() {
    if (isNumeric(this.d)) {
      return 'bs-start-' + this.d
    }
    return null
  }
}

@Directive({
  selector: '[e]',
})
export class EndDirective {
  @Input('e') d: 0 | 50 | 100 | string = null;

  @HostBinding('class')
  get class() {
    if (isNumeric(this.d)) {
      return 'bs-end-' + this.d
    }
    return null
  }
}

@Directive({
  selector: '[tm]',
})
export class MiddleDirective {
  @Input('tm') d: 0 | 50 | 100 | string = null;

  @HostBinding('class')
  get class() {
    if (isNumeric(this.d)) {
      return 'bs-translate-middle-' + this.d
    }
    return null
  }
}

export const PositionDirectives = [
  PositionDirective,
  TopDirective,
  BottomDirective,
  StartDirective,
  EndDirective,
  MiddleDirective,
]
