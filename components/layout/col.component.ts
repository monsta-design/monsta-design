import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {SpacingSize} from "../types";

@Component({
  selector: 'ns-col',
  template: `
    <ng-content></ng-content>`,
  styleUrls: ['./layout.scss']
})
export class NsColComponent implements OnInit {

  @Input('span') span: number | string;

  @HostBinding('class') get hostBindingClass(): string {
    return [
      this.span ? 'bs-col-' + this.span : 'bs-col'
    ].join('');
  }

  constructor(
    // private el:Element
  ) {
  }

  ngOnInit(): void {
  }

}
