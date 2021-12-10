import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[_inline_align]',

})
export class InlineAlignDirective {
  @Input() _inline_align: 'baseline' | 'top' | 'middle' | 'bottom' | 'text-top' | 'text-bottom' = null;

  @HostBinding('class')
  get class() {
    return 'bs-align-' + this._inline_align
  }
}

export const SpaceDirectives = [
  InlineAlignDirective
]
