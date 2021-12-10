import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[_input]'
})
export class InputDirective {
  @Input() _input_size: 'sm' | 'lg' | 'default';
  @Input() _input_loading: boolean;

  @HostBinding('class') get getClass() {
    let classes = ['bs-form-control']
    return classes.join(' ')
  }
}

@Directive({
  selector: '[_label]'
})
export class LabelDirective {
  @HostBinding('class') get getClass() {
    let classes = ['bs-form-label']
    return classes.join(' ')
  }
}

@Directive({
  selector: '[_check]'
})
export class CheckDirective {
  @Input() _check_inline: boolean

  @HostBinding('class') get getClass() {
    let classes = ['bs-form-label']
    return classes.join(' ')
  }
}

@Directive({
  selector: '[_radio]'
})
export class RadioDirective {
  @Input() _radio_inline: boolean

  @HostBinding('class') get getClass() {
    let classes = ['bs-form-label']
    return classes.join(' ')
  }
}

@Directive({
  selector: '[_switch]'
})
export class SwitchDirective {
  @HostBinding('class') get getClass() {
    let classes = ['bs-form-label']
    return classes.join(' ')
  }
}


export const InputDirectives = [
  InputDirective,
  LabelDirective,
  CheckDirective,
  RadioDirective,
  SwitchDirective,
]
