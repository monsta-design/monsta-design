import {Directive, HostBinding, Input} from '@angular/core';
import {Color} from "../types";

@Directive({
  selector: '[nsLink]'
})
export class LinkDirective {

  @Input() nsLink: Color = 'primary'
  @Input() nsStretched: boolean | 'false' | 'true' = false

  @HostBinding('class') get getClass() {
    let classes = []
    classes.push('bs-link-' + this.nsLink)
    if (this.nsStretched === true || this.nsStretched === 'true') {
      classes.push('bs-stretched-link')
    }
    return classes.join(' ')
  }

}

export const LinkDirectives = [
  LinkDirective
]
