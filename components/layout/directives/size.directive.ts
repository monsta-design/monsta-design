import {Directive, HostBinding, Input} from '@angular/core';
import {isNumeric} from "rxjs/internal-compatibility";


@Directive({
  selector: '[w]',

})
export class WDirective {
  @Input('w') size: 25 | 50 | 75 | 100 | 'auto' | string = null;

  @HostBinding('class')
  get class() {
    if (isNumeric(this.size)) {
      return 'bs-w-' + this.size
    }
    return null
  }

  @HostBinding('style.width')
  get style() {
    return null
  }
}


@Directive({
  selector: '[h]',

})
export class HDirective {
  @Input('h') size: 25 | 50 | 75 | 100 | 'auto' | string = null;

  @HostBinding('class')
  get class() {
    if (isNumeric(this.size)) {
      return 'bs-h-' + this.size
    }
    return null
  }

  @HostBinding('style.width')
  get style() {
    return null
  }
}
