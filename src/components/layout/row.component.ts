import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ns-row',
  template: `
    <ng-content></ng-content>`,
  styleUrls: ['./layout.scss']
})
export class NsRowComponent implements OnInit {

  @Input() _cols: number;
  @Input() _cols_sm: number;
  @Input() _cols_md: number;
  @Input() _cols_lg: number;
  @Input() _cols_xl: number;
  @Input() _cols_xxl: number;
  @Input() _gx: number;
  @Input() _gy: number;
  @Input() _g: number;
  @Input() _g_sm: number;
  @Input() _g_md: number;
  @Input() _g_lg: number;
  @Input() _g_xl: number;
  @Input() _g_xxl: number;

  @HostBinding('class') get getClass(): string {
    return [
      'bs-row',
      this._cols ? 'bs-cols-' + this._cols : '',
      this._cols_sm ? 'bs-cols-sm-' + this._cols_sm : '',
      this._cols_md ? 'bs-cols-md-' + this._cols_md : '',
      this._cols_lg ? 'bs-cols-lg-' + this._cols_lg : '',
      this._cols_xl ? 'bs-cols-xl-' + this._cols_xl : '',
      this._cols_xxl ? 'bs-cols-xxl-' + this._cols_xxl : '',
      this._gx ? 'bs-gx-' + this._gx : '',
      this._gy ? 'bs-gy-' + this._gy : '',
      this._g ? 'bs-g-' + this._g : '',
      this._g_sm ? 'bs-g-sm-' + this._g_sm : '',
      this._g_md ? 'bs-g-md-' + this._g_md : '',
      this._g_lg ? 'bs-g-lg-' + this._g_lg : '',
      this._g_xl ? 'bs-g-xl-' + this._g_xl : '',
      this._g_xxl ? 'bs-g-xxl-' + this._g_xxl : '',
    ].join(' ')
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
