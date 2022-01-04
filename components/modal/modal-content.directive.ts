import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[nsModalContent]',
  exportAs: 'nsModalContent'
})
export class NsModalContentDirective {
  constructor(public templateRef: TemplateRef<any>) {
  }
}
