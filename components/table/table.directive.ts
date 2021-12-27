import {Directive, HostBinding, Input} from '@angular/core';
import {InputBoolean} from "monsta-design/core";

@Directive({
  selector: '[nsTable]'
})
export class NSTableDirective {

  @Input() @InputBoolean() nsTableHover: boolean = false;

  constructor() {
  }

  @HostBinding('class') get getClass() {
    let classes = ['bs-table']
    if (this.nsTableHover) {
      classes.push('bs-table-hover')
    }
    return classes.join(' ')
  }

}
