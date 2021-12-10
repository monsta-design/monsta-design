import {Directive, HostBinding, Input} from '@angular/core';

export type FloatValue = 'start' | 'end' | 'none';

@Directive({
  selector: '[float]',
})
export class FloatDirective {
  @Input() float: FloatValue = null;

  @HostBinding('class')
  get class() {
    if (this.float === null) {
      return null
    }
    return 'bs-float-' + this.float
  }
}

@Directive({
  selector: '[float_sm]',
})
export class FloatSmDirective {
  @Input() float_sm: FloatValue = null;

  @HostBinding('class')
  get class() {
    if (this.float_sm === null) {
      return null
    }
    return 'bs-float-sm-' + this.float_sm
  }
}

@Directive({
  selector: '[float_md]',
})
export class FloatMdDirective {
  @Input() float_md: FloatValue = null;

  @HostBinding('class')
  get class() {
    if (this.float_md === null) {
      return null
    }
    return 'bs-float-md-' + this.float_md
  }
}

@Directive({
  selector: '[float_lg]',
})
export class FloatLgDirective {
  @Input() float_lg: FloatValue = null;

  @HostBinding('class')
  get class() {
    if (this.float_lg === null) {
      return null
    }
    return 'bs-float-lg-' + this.float_lg
  }
}

@Directive({
  selector: '[float_xl]',
})
export class FloatXlDirective {
  @Input() float_xl: FloatValue = null;

  @HostBinding('class')
  get class() {
    if (this.float_xl === null) {
      return null
    }
    return 'bs-float-xl-' + this.float_xl
  }
}

@Directive({
  selector: '[float_xxl]',
})
export class FloatXxlDirective {
  @Input() float_xxl: FloatValue = null;

  @HostBinding('class')
  get class() {
    if (this.float_xxl === null) {
      return null
    }
    return 'bs-float-xxl-' + this.float_xxl
  }
}

@Directive({
  selector: '[clearfix]',
  host: {
    class: 'bs-clearfix'
  }
})
export class ClearfixDirective {
}

export const FloatDirectives = [
  FloatDirective,
  FloatSmDirective,
  FloatMdDirective,
  FloatLgDirective,
  FloatXlDirective,
  FloatXxlDirective,
  ClearfixDirective
]
