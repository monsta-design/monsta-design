import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[ns-row]'
})
export class NSRowDirective {
  constructor(el: ElementRef) {
    el.nativeElement.classList.add('row');
  }

}
