import {Directive, HostBinding, Input} from '@angular/core';
import {Color} from "../types";

@Directive({
  selector: '[_link]'
})
export class LinkDirective {

  @Input() _link: Color = 'primary'
  @Input() _link_stretched: boolean | 'false' | 'true' = false

  @HostBinding('class') get getClass() {
    let classes = []
    classes.push('bs-link-' + this._link)
    if (this._link_stretched === true || this._link_stretched === 'true') {
      classes.push('bs-stretched-link')
    }
    return classes.join(' ')
  }

}

export const LinkDirectives = [
  LinkDirective
]
