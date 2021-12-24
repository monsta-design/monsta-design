import {Component} from '@angular/core';

@Component({
  selector: 'ns-input-group-text',
  template: `
    <ng-content></ng-content>`,
  host: {
    class: 'bs-input-group-text'
  }
})
export class NSInputGroupTextComponent {

}
