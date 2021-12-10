import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[inline_align]',

})
export class InlineAlignDirective {
  @Input() inline_align: 'baseline' | 'top' | 'middle' | 'bottom' | 'text-top' | 'text-bottom' = null;

  @HostBinding('class')
  get class() {
    return 'bs-align-' + this.inline_align
  }
}

export const SpaceDirectives = [
  InlineAlignDirective
]
