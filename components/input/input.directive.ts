import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[nsInput]'
})
export class InputDirective {
  @Input('nsSize') nsSize: 'sm' | 'lg' | 'default';
  @Input() nsLoading: boolean;

  @HostBinding('class') get getClass() {
    let classes = ['bs-form-control']
    return classes.join(' ')
  }
}

@Directive({
  selector: '[nsLabel]'
})
export class LabelDirective {
  @HostBinding('class') get getClass() {
    let classes = ['bs-form-label']
    return classes.join(' ')
  }
}

@Directive({
  selector: '[nsCheck]'
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
