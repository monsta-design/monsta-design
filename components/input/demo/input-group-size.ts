import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-input-input-group-size',
  template: `
    <ns-input-group nsSize="lg">
      <ns-input-group-text>@</ns-input-group-text>
      <input nsInput placeholder="Username">
    </ns-input-group>
    <ns-input-group>
      <ns-input-group-text>@</ns-input-group-text>
      <input nsInput placeholder="Username">
    </ns-input-group>
    <ns-input-group nsSize="sm">
      <ns-input-group-text>@</ns-input-group-text>
      <input nsInput placeholder="Username">
    </ns-input-group>
  `,
  styles: [`
    ns-input-group {
      margin-bottom: 1rem;
    }
  `]
})
export class NSDemoInputInputGroupSizeComponent {

}
