import {Directive, HostBinding, Input} from '@angular/core';

export type FloatValue = 'start' | 'end' | 'none';

@Directive({
  selector: '[_float]',
})
export class FloatDirective {
  @Input() _float: FloatValue = null;

  @HostBinding('class')
  get class() {
    if (this._float === null) {
      return null
    }
    return 'bs-float-' + this._float
  }
}

@Directive({
  selector: '[_float_sm]',
})
export class FloatSmDirective {
  @Input() _float_sm: FloatValue = null;

  @HostBinding('class')
  get class() {
    if (this._float_sm === null) {
      return null
    }
    return 'bs-float-sm-' + this._float_sm
  }
}

@Directive({
  selector: '[_float_md]',
})
export class FloatMdDirective {
  @Input() _float_md: FloatValue = null;

  @HostBinding('class')
  get class() {
    if (this._float_md === null) {
      return null
    }
    return 'bs-float-md-' + this._float_md
  }
}

@Directive({
  selector: '[_float_lg]',
})
export class FloatLgDirective {
  @Input() _float_lg: FloatValue = null;

  @HostBinding('class')
  get class() {
    if (this._float_lg === null) {
      return null
    }
    return 'bs-float-lg-' + this._float_lg
  }
}

@Directive({
  selector: '[_float_xl]',
})
export class FloatXlDirective {
  @Input() _float_xl: FloatValue = null;

  @HostBinding('class')
  get class() {
    if (this._float_xl === null) {
      return null
    }
    return 'bs-float-xl-' + this._float_xl
  }
}

@Directive({
  selector: '[_float_xxl]',
})
export class FloatXxlDirective {
  @Input() _float_xxl: FloatValue = null;

  @HostBinding('class')
  get class() {
    if (this._float_xxl === null) {
      return null
    }
    return 'bs-float-xxl-' + this._float_xxl
  }
}

@Directive({
  selector: '[_clearfix]',
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
