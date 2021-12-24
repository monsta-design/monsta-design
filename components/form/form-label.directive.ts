import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[nsFormLabel]'
})
export class NSFormLabelDirective {

  @HostBinding('class') get getClasses() {
    let classes = ['bs-form-label'];
    return classes.join(' ');
  }

}
