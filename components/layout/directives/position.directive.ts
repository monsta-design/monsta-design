import {Directive, HostBinding, Input} from '@angular/core';
import {isNumeric} from "rxjs/internal-compatibility";

@Directive({
  selector: '[position]',
})
export class PositionDirective {
  @Input('position') position: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky' = null;

  @HostBinding('class')
  get class() {
    if (this.position != null) {
      return 'bs-position-' + this.position
    }
    return null
  }
}

@Directive({
  selector: '[top]',
})
export class TopDirective {
  @Input('top') d: 0 | 50 | 100 | string = null;

  @HostBinding('class')
  get class() {
    if (isNumeric(this.d)) {
      return 'bs-top-' + this.d
    }
    return null
  }
}

@Directive({
  selector: '[bottom]',
})
export class BottomDirective {
  @Input('bottom') d: 0 | 50 | 100 | string = null;

  @HostBinding('class')
  get class() {
    if (isNumeric(this.d)) {
      return 'bs-bottom-' + this.d
    }
    return null
  }
}

@Directive({
  selector: '[start]',
})
export class StartDirective {
  @Input('start') d: 0 | 50 | 100 | string = null;

  @HostBinding('class')
  get class() {
    if (isNumeric(this.d)) {
      return 'bs-start-' + this.d
    }
    return null
  }
}

@Directive({
  selector: '[end]',
})
export class EndDirective {
  @Input('end') d: 0 | 50 | 100 | string = null;

  @HostBinding('class')
  get class() {
    if (isNumeric(this.d)) {
      return 'bs-end-' + this.d
    }
    return null
  }
}

@Directive({
  selector: '[middle]',
})
export class MiddleDirective {
  @Input('middle') d: 0 | 50 | 100 | string = null;

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
