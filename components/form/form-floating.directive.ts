import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[nsFormFloating]'
})
export class NSFormFloatingDirective {

  @HostBinding('class') get getClasses() {
    let classes = ['bs-form-floating'];
    return classes.join(' ');
  }

}
