import {Directive, HostBinding, Input} from '@angular/core';
import {Color, isDefaultColor} from "../../types";
import {isNumeric} from "rxjs/internal-compatibility";


@Directive({
  selector: '[border]',
})
export class BorderDirective {

  @Input('border') border: 'all' | 'top' | 'bottom' | 'start' | 'end' | 'none' | 'no-top' | 'no-bottom' | 'no-start' | 'no-end' = 'all'
  @Input('border_color') border_color: Color = null
  @Input('border_width') border_width: 1 | 2 | 3 | 4 | 5 | string = null

  @HostBinding('class')
  get class(): string {
    let classes = []
    switch (this.border) {
      case 'all':
        classes.push('bs-border')
        break
      case 'top':
        classes.push('bs-border-top')
        break
      case 'bottom':
        classes.push('bs-border-bottom')
        break
      case 'start':
        classes.push('bs-border-start')
        break
      case 'end':
        classes.push('bs-border-end')
        break
      case 'none':
        classes.push('bs-border-0')
        break
      case 'no-top':
        classes.push('bs-border bs-border-top-0')
        break
      case 'no-bottom':
        classes.push('bs-border bs-border-bottom-0')
        break
      case 'no-start':
        classes.push('bs-border bs-border-start-0')
        break
      case 'no-end':
        classes.push('bs-border bs-border-end-0')
        break
    }
    if (isDefaultColor(this.border_color)) {
      classes.push('bs-border-' + this.border_color)
    }
    if (isNumeric(this.border_width)) {
      classes.push('bs-border-' + this.border_width)
    }
    return classes.join(' ')
  }

  @HostBinding('style.border-color') get getColor(): string {
    if (this.border_color === null) {
      return null
    }
    if (isDefaultColor(this.border_color)) {
      return null
    }
    return this.border_color + '!important'
  }

  @HostBinding('style.border-width') get getWidth(): string {
    if (this.border_width === null) {
      return null
    }
    if (isNumeric(this.border_width)) {
      return null
    }
    return this.border_width + '!important'
  }
}

@Directive({
  selector: '[rounded]',
})
export class RoundedDirective {

  @Input('rounded') rounded: 'all' | 'top' | 'bottom' | 'start' | 'end' | 'circle' | 'pill' = 'all'
  @Input('rounded_size') rounded_size: 0 | 1 | 2 | 3 | 4 | 5 | string = null

  @HostBinding('class')
  get class(): string {
    let classes = []
    switch (this.rounded) {
      case 'all':
        classes.push('bs-rounded')
        break
      case 'top':
        classes.push('bs-rounded-top')
        break
      case 'bottom':
        classes.push('bs-rounded-bottom')
        break
      case 'start':
        classes.push('bs-rounded-start')
        break
      case 'end':
        classes.push('bs-rounded-end')
        break
      case 'circle':
        classes.push('bs-rounded-circle')
        break
      case 'pill':
        classes.push('bs-rounded-pill')
        break
    }
    if (isNumeric(this.rounded_size)) {
      classes.push('bs-rounded-' + this.rounded_size)
    }
    return classes.join(' ')
  }

  @HostBinding('style.border-radius') get getRadius(): string {
    if (this.rounded_size === null) {
      return null
    }
    if (isNumeric(this.rounded_size)) {
      return null
    }
    return this.rounded_size + '!important'
  }
}

export const BorderDirectives = [
  BorderDirective,
  RoundedDirective,
]
