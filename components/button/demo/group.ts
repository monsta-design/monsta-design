import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-button-group',
  template: `
    <ns-button-group>
      <button type="button" class="btn btn-primary">Left</button>
      <button type="button" class="btn btn-primary">Middle</button>
      <button type="button" class="btn btn-primary">Right</button>
    </ns-button-group>
  `,
})
export class NSDemoButtonGroupComponent {
}
