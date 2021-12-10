import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ns-menu-header',
  template: '{{ nsLabel }}<ng-content></ng-content>',
  host: {
    class: 'ns-menu-header'
  }
})
export class NSMenuHeaderComponent implements OnInit {

  @Input() nsLabel: string

  constructor() {
  }

  ngOnInit() {
  }

}
