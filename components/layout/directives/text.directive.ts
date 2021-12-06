import {Directive, HostBinding, Input} from '@angular/core';
import {Color, isDefaultColor, randColor} from "../utils";

@Directive({
  selector: '[color]',
})
export class ColorDirective {
  @Input('color') color: Color = null;
  private rand: string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultColor(this.color)) {
      return 'bs-text-' + this.color
    }
    return null
  }

  @HostBinding('style.color')
  get style() {
    if (isDefaultColor(this.color)) {
      return null
    }
    if (this.color == 'rand') {
      if (this.rand != null) {
        return this.rand
      }
      this.rand = randColor()
      return this.rand
    }
    return this.color
  }
}

@Directive({
  selector: '[overflow]',
})
export class OverflowDirective {
  @Input('overflow') overflow: 'auto' | 'hidden' | 'visible' | 'scroll' = 'auto';

  @HostBinding('class')
  get class() {
    return 'bs-overflow-' + this.overflow
  }
}

@Directive({
  selector: '[shadow]',
})
export class ShadowDirective {
  @Input('shadow') shadow: 'none' | 'sm' | 'lg' | '' = '';

  @HostBinding('class')
  get class() {
    if (this.shadow === '') {
      return 'bs-shadow'
    }
    return 'bs-shadow-' + this.shadow
  }
}

@Directive({
  selector: '[user_select]',
})
export class UserSelectDirective {
  @Input('user_select') user_select: 'all' | 'none' | 'auto' = 'auto';

  @HostBinding('class')
  get class() {
    return 'bs-user-select-' + this.user_select
  }
}

export const TextDirectives = [
  ColorDirective,
  OverflowDirective,
  ShadowDirective,
  UserSelectDirective,
]
