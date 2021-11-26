import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ns-menu-header',
  template: '{{ _label }}<ng-content></ng-content>',
  host: {
    class: 'ns-menu-header'
  }
})
export class NSMenuHeaderComponent implements OnInit {

  @Input() _label: string

  constructor() {
  }

  ngOnInit() {
  }

}
