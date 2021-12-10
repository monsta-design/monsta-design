import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-button-basic',
  template: `
    <button nsButton="primary">Primary</button>
    <button nsButton="secondary">Secondary</button>
    <button nsButton="success">Success</button>
    <button nsButton="danger">Danger</button>
    <button nsButton="warning">Warning</button>
    <button nsButton="info">Info</button>
    <button nsButton="light">Light</button>
    <button nsButton="dark">Dark</button>
    <button nsButton="link">Link</button>
  `,
  styles: [`
    button {
      margin-right: 5px;
    }
  `]
})
export class NSDemoButtonBasicComponent {
}
