import {Directive, HostBinding, Input} from '@angular/core';


@Directive({
  selector: '[space]',

})
export class SpaceDirective {
  @Input('space') space: 'baseline' | 'top' | 'middle' | 'bottom' | 'text-top' | 'text-bottom' = "baseline";

  @HostBinding('class')
  get class() {
    return 'bs-align-' + this.space
  }
}


@Directive({
  selector: '[align]',

})
export class AlignDirective {
  @Input('align') align: 'baseline' | 'top' | 'middle' | 'bottom' | 'text-top' | 'text-bottom' = "baseline";

  @HostBinding('class')
  get class() {
    return 'bs-align-' + this.align
  }
}

export const SpaceDirectives = [
  SpaceDirective,
  AlignDirective
]
