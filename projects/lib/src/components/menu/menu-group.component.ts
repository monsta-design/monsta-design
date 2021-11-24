import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ns-menu-group',
  template: `<h5>{{ nsTitle }}</h5>
  <ng-content></ng-content>`,
  styleUrls: ['./menu-group.component.scss']
})
export class NSMenuGroupComponent implements OnInit {

  @Input('nsTitle') nsTitle: string = '';

  constructor() {
  }

  ngOnInit() {
  }

}
