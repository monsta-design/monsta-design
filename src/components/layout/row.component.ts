import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ns-row',
  template: `
    <ng-content></ng-content>`,
  styleUrls: ['./layout.scss']
})
export class NsRowComponent implements OnInit {

  @Input() cols: number;
  @Input() cols_sm: number;
  @Input() cols_md: number;
  @Input() cols_lg: number;
  @Input() cols_xl: number;
  @Input() cols_xxl: number;
  @Input() gx: number;
  @Input() gy: number;
  @Input() g: number;
  @Input() g_sm: number;
  @Input() g_md: number;
  @Input() g_lg: number;
  @Input() g_xl: number;
  @Input() g_xxl: number;
  @Input() mt: number;
  @Input() mb: number;
  @Input() ml: number;
  @Input() mr: number;

  @HostBinding('class') get getClass(): string {
    return [
      'bs-row',
      this.cols ? 'bs-cols-' + this.cols : '',
      this.cols_sm ? 'bs-cols-sm-' + this.cols_sm : '',
      this.cols_md ? 'bs-cols-md-' + this.cols_md : '',
      this.cols_lg ? 'bs-cols-lg-' + this.cols_lg : '',
      this.cols_xl ? 'bs-cols-xl-' + this.cols_xl : '',
      this.cols_xxl ? 'bs-cols-xxl-' + this.cols_xxl : '',
      this.gx ? 'bs-gx-' + this.gx : '',
      this.gy ? 'bs-gy-' + this.gy : '',
      this.g ? 'bs-g-' + this.g : '',
      this.g_sm ? 'bs-g-sm-' + this.g_sm : '',
      this.g_md ? 'bs-g-md-' + this.g_md : '',
      this.g_lg ? 'bs-g-lg-' + this.g_lg : '',
      this.g_xl ? 'bs-g-xl-' + this.g_xl : '',
      this.g_xxl ? 'bs-g-xxl-' + this.g_xxl : '',
    ].join(' ')
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
