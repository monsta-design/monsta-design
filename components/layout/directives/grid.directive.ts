import {Directive, HostBinding, Input} from '@angular/core';
import {isNumeric} from "rxjs/internal-compatibility";

@Directive({
  selector: '[row]',

})
export class NSRowDirective {
  @Input() row_cols: number | string;
  @Input() row_cols_sm: number | string;
  @Input() row_cols_md: number | string;
  @Input() row_cols_lg: number | string;
  @Input() row_cols_xl: number | string;
  @Input() row_cols_xxl: number | string;

  @HostBinding('class') get getClass(): string {
    let classes = ['bs-row']
    if (isNumeric(this.row_cols)) {
      classes.push('bs-row-cols-' + this.row_cols)
    }
    if (isNumeric(this.row_cols_sm)) {
      classes.push('bs-row-cols-sm-' + this.row_cols_sm)
    }
    if (isNumeric(this.row_cols_md)) {
      classes.push('bs-row-cols-md-' + this.row_cols_md)
    }
    if (isNumeric(this.row_cols_lg)) {
      classes.push('bs-row-cols-lg-' + this.row_cols_lg)
    }
    if (isNumeric(this.row_cols_xl)) {
      classes.push('bs-row-cols-xl-' + this.row_cols_xl)
    }
    if (isNumeric(this.row_cols_xxl)) {
      classes.push('bs-row-cols-xxl-' + this.row_cols_xxl)
    }
    return classes.join(' ')
  }
}

@Directive({
  selector: '[col]',
})
export class NSColDirective {
  @Input() col: number | string | 'auto' = ''

  @HostBinding('class') get hostBindingClass(): string {
    if (this.col === '' || this.col === 'auto') {
      return 'bs-col'
    }
    return 'bs-col-' + this.col
  }
}

export const NSGridDirectives = [
  NSRowDirective,
  NSColDirective,
]
