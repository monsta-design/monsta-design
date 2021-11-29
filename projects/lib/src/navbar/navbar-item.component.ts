import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-navbar-item',
  template: '<ng-content></ng-content>',
  host: {
    class: 'bs-nav-item'
  }
})
export class NavbarItemComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
