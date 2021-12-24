import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[nsForm]'
})
export class NSFormDirective {

  @HostBinding('class') get getClasses() {
    let classes = ['bs-row'];
    return classes.join(' ');
  }


}
