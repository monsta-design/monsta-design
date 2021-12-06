import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-button-basic',
  template: `
    <ns-button type="primary">Primary</ns-button>
    <ns-button type="secondary">Secondary</ns-button>
    <ns-button type="success">Success</ns-button>
    <ns-button type="danger">Danger</ns-button>
    <ns-button type="warning">Warning</ns-button>
    <ns-button type="info">Info</ns-button>
    <ns-button type="light">Light</ns-button>
    <ns-button type="dark">Dark</ns-button>
    <ns-button type="link">Link</ns-button>
  `,
  styles: [`
    ns-button {
      margin-right: 5px;
    }
  `]
})
export class NSDemoButtonBasicComponent {
}
