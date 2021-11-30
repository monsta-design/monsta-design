import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ns-col',
  template: `
    <ng-content></ng-content>`,
  styleUrls: ['./layout.scss']
})
export class NsColComponent implements OnInit {

  @Input('span') _span: number;

  @HostBinding('class') get hostBindingClass(): string {
    return [
      this._span ? 'bs-col-' + this._span : 'bs-col'
    ].join('');
  }

  constructor(
    // private el:Element
  ) {
  }

  ngOnInit(): void {
  }

}
