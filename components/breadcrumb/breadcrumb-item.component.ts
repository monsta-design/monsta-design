import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {InputBoolean} from "../convert";

@Component({
  selector: 'ns-breadcrumb-item',
  template: '<ng-content></ng-content>',
  host: {
    class: 'bs-breadcrumb-item'
  }
})
export class NSBreadcrumbItemComponent {

  @Input() @InputBoolean() nsActive: boolean = false;

  @HostBinding('class.bs-active') get getActive() {
    return this.nsActive
  }

}
