import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-button-outline',
  template: `
    <ns-button outline="true" type="primary">Primary</ns-button>
    <ns-button outline="true" type="secondary">Secondary</ns-button>
    <ns-button outline="true" type="success">Success</ns-button>
    <ns-button outline="true" type="danger">Danger</ns-button>
    <ns-button outline="true" type="warning">Warning</ns-button>
    <ns-button outline="true" type="info">Info</ns-button>
    <ns-button outline="true" type="light">Light</ns-button>
    <ns-button outline="true" type="dark">Dark</ns-button>
    <ns-button outline="true" type="link">Link</ns-button>
  `,
  styles: [`
    ns-button {
      margin-right: 5px;
    }
  `]
})
export class NSDemoButtonOutlineComponent {
}
