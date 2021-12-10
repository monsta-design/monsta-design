import {Directive, HostBinding, Input} from '@angular/core';
import {isNumeric} from "rxjs/internal-compatibility";

@Directive({
  selector: '[_position]',
})
export class PositionDirective {
  @Input('_position') position: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky' = null;

  @HostBinding('class')
  get class() {
    if (this.position != null) {
      return 'bs-position-' + this.position
    }
    return null
  }
}

@Directive({
  selector: '[_top]',
})
export class TopDirective {
  @Input('_top') d: 0 | 50 | 100 | string = null;

  @HostBinding('class')
  get class() {
    if (isNumeric(this.d)) {
      return 'bs-top-' + this.d
    }
    return null
  }
}

@Directive({
  selector: '[_bottom]',
})
export class BottomDirective {
  @Input('_bottom') d: 0 | 50 | 100 | string = null;

  @HostBinding('class')
  get class() {
    if (isNumeric(this.d)) {
      return 'bs-bottom-' + this.d
    }
    return null
  }
}

@Directive({
  selector: '[_start]',
})
export class StartDirective {
  @Input('_start') d: 0 | 50 | 100 | string = null;

  @HostBinding('class')
  get class() {
    if (isNumeric(this.d)) {
      return 'bs-start-' + this.d
    }
    return null
  }
}

@Directive({
  selector: '[_end]',
})
export class EndDirective {
  @Input('_end') d: 0 | 50 | 100 | string = null;

  @HostBinding('class')
  get class() {
    if (isNumeric(this.d)) {
      return 'bs-end-' + this.d
    }
    return null
  }
}

@Directive({
  selector: '[_middle]',
})
export class MiddleDirective {
  @Input('_middle') d: 0 | 50 | 100 | string = null;

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
