import {Directive, HostBinding, Input} from '@angular/core';
import {Color, isDefaultColor, randColor} from "../utils";

@Directive({
  selector: '[bg]',

})
export class BGDirective {
  @Input('bg') color: Color = null;
  private rand: string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultColor(this.color)) {
      return 'bs-bg-' + this.color
    }
    return null
  }

  @HostBinding('style.background-color')
  get style() {
    if (isDefaultColor(this.color)) {
      return null
    }
    if (this.color == 'rand') {
      if (this.rand != null) {
        return this.rand
      }
      this.rand = randColor()
      return this.rand
    }
    return this.color
  }
}

