import {Directive, HostBinding, Input} from '@angular/core';
import {InputBoolean} from "monsta-design/core";

@Directive({
  selector: '[nsInput]',
})
export class InputDirective {

  @Input() nsInputSize: 'sm' | 'lg' | 'default' = 'default';
  @Input() @InputBoolean() nsPlaintext: boolean = false;
  @Input() @InputBoolean() nsColor: boolean = false;
  @Input() @InputBoolean() nsInvalid: boolean = false;

  @HostBinding('class') get getClasses() {
    let classes = ['bs-form-control'];
    if (this.nsInputSize != 'default') {
      classes.push(`bs-form-control-${this.nsInputSize}`)
    }
    if (this.nsPlaintext) {
      classes.push('bs-form-control-plaintext');
    }
    if (this.nsColor) {
      classes.push('bs-form-control-color');
    }
    if (this.nsInvalid) {
      classes.push('bs-is-invalid')
    }
    return classes.join(' ');
  }
}
