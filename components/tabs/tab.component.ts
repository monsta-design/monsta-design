import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ns-tab',
  template: '<ng-content></ng-content>'
})
export class NSTabComponent {

  @Input() nsTitle: string


}
