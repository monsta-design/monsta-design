import {Directive, HostBinding, Input} from '@angular/core';
import {isNumeric} from "rxjs/internal-compatibility";

@Directive({
  selector: '[_row]',

})
export class NSRowDirective {
  @Input() _row_cols: number | string;
  @Input() _row_cols_sm: number | string;
  @Input() _row_cols_md: number | string;
  @Input() _row_cols_lg: number | string;
  @Input() _row_cols_xl: number | string;
  @Input() _row_cols_xxl: number | string;

  @HostBinding('class') get getClass(): string {
    let classes = ['bs-row']
    if (isNumeric(this._row_cols)) {
      classes.push('bs-row-cols-' + this._row_cols)
    }
    if (isNumeric(this._row_cols_sm)) {
      classes.push('bs-row-cols-sm-' + this._row_cols_sm)
    }
    if (isNumeric(this._row_cols_md)) {
      classes.push('bs-row-cols-md-' + this._row_cols_md)
    }
    if (isNumeric(this._row_cols_lg)) {
      classes.push('bs-row-cols-lg-' + this._row_cols_lg)
    }
    if (isNumeric(this._row_cols_xl)) {
      classes.push('bs-row-cols-xl-' + this._row_cols_xl)
    }
    if (isNumeric(this._row_cols_xxl)) {
      classes.push('bs-row-cols-xxl-' + this._row_cols_xxl)
    }
    return classes.join(' ')
  }
}

@Directive({
  selector: '[_col]',
})
export class NSColDirective {
  @Input() _col: number | string | 'auto' = ''

  @HostBinding('class') get hostBindingClass(): string {
    if (this._col === '' || this._col === 'auto') {
      return 'bs-col'
    }
    return 'bs-col-' + this._col
  }
}

export const NSGridDirectives = [
  NSRowDirective,
  NSColDirective,
]
