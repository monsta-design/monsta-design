import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-breadcrumb',
  template: '<ng-content></ng-content>',
  host: {
    class: 'bs-breadcrumb'
  }
})
export class NSBreadcrumbComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
