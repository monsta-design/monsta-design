import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ns-container',
  template: '<div class="bs-container" [ngClass]="sizeClass"></div>',
  styleUrls: ['layout.scss']
})
export class ContainerComponent implements OnInit {

  @Input() _size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  sizeClass = ''

  constructor() {
  }

  ngOnInit() {
    this.sizeClass = this._size ? 'bs-container-' + this._size : ''
  }

}
