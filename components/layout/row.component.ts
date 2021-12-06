import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {isNumeric} from "rxjs/internal-compatibility";

type SpacingSize = 0 | 1 | 2 | 3 | 4 | 5 | '0' | '1' | '2' | '3' | '4' | '5' | 'auto';

@Component({
  selector: 'ns-row',
  template: `
    <ng-content></ng-content>`,
  styleUrls: ['./layout.scss']
})
export class NsRowComponent implements OnInit {
  @Input() cols: number | string;
  @Input() cols_sm: number | string;
  @Input() cols_md: number | string;
  @Input() cols_lg: number | string;
  @Input() cols_xl: number | string;
  @Input() cols_xxl: number | string;

  @HostBinding('class') get getClass(): string {
    let classes = ['bs-row']
    if (isNumeric(this.cols)) {
      classes.push('bs-row-cols-' + this.cols)
    }
    if (isNumeric(this.cols_sm)) {
      classes.push('bs-row-cols-sm-' + this.cols_sm)
    }
    if (isNumeric(this.cols_md)) {
      classes.push('bs-row-cols-md-' + this.cols_md)
    }
    if (isNumeric(this.cols_lg)) {
      classes.push('bs-row-cols-lg-' + this.cols_lg)
    }
    if (isNumeric(this.cols_xl)) {
      classes.push('bs-row-cols-xl-' + this.cols_xl)
    }
    if (isNumeric(this.cols_xxl)) {
      classes.push('bs-row-cols-xxl-' + this.cols_xxl)
    }
    return classes.join(' ')
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
