import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ns-container',
  template: '<div class="bs-container" [ngClass]="sizeClass"></div>',
  styleUrls: ['layout.scss']
})
export class ContainerComponent implements OnInit {

  @Input() size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  @Input() fluid: boolean | 'true' | 'false';
  @Input() mt: number;
  @Input() mb: number;
  @Input() ml: number;
  @Input() mr: number;
  sizeClass = ''

  constructor() {
  }

  ngOnInit() {
    this.sizeClass = this.size ? 'bs-container-' + this.size : ''
  }

}
