import {Directive, HostBinding, Input} from '@angular/core';
import {isNumeric} from "rxjs/internal-compatibility";
import {NSGridValue} from "monsta-design/core";

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
  @Input() col: NSGridValue
  @Input() col_sm: NSGridValue
  @Input() col_md: NSGridValue
  @Input() col_lg: NSGridValue
  @Input() col_xl: NSGridValue
  @Input() col_xxl: NSGridValue


  @HostBinding('class') get getClass(): string {
    let classes = [];
    this.addClass(classes, '', 'col')
    this.addClass(classes, '-sm', 'col_sm')
    this.addClass(classes, '-md', 'col_md')
    this.addClass(classes, '-lg', 'col_lg')
    this.addClass(classes, '-xl', 'col_xl')
    this.addClass(classes, '-xxl', 'col_xxl')
    return classes.join(' ')
  }

  addClass(classes: string[], media: string, field: string) {
    if (this[field] && this[field] != 'none') {
      if (this[field] == '') {
        classes.push(`bs-col${media}`)
      } else {
        classes.push(`bs-col${media}-${this[field]}`)
      }
    }
  }
}

@Directive({
  selector: '[offset]',
})
export class NSOffsetDirective {
  @Input() offset: number | string | 'auto' = ''
  @Input() offset_sm: number | string;
  @Input() offset_md: number | string;
  @Input() offset_lg: number | string;
  @Input() offset_xl: number | string;
  @Input() offset_xxl: number | string;

  @HostBinding('class') get hostBindingClass(): string {
    let classes = []
    this.addClass(classes, '', 'offset')
    this.addClass(classes, '-sm', 'offset_sm')
    this.addClass(classes, '-md', 'offset_md')
    this.addClass(classes, '-lg', 'offset_lg')
    this.addClass(classes, '-xl', 'offset_xl')
    this.addClass(classes, '-xxl', 'offset_xxl')
    return classes.join(' ')
  }

  addClass(classes: string[], media: string, field: string) {
    if (this[field] && this[field] != 'none') {
      if (this[field] == '') {
        classes.push(`bs-offset${media}`)
      } else {
        classes.push(`bs-offset${media}-${this[field]}`)
      }
    }
  }
}

export const NSGridDirectives = [
  NSRowDirective,
  NSColDirective,
  NSOffsetDirective,
]
