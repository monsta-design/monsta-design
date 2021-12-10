import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-button-basic',
  template: `
    <button _button="primary">Primary</button>
    <button _button="secondary">Secondary</button>
    <button _button="success">Success</button>
    <button _button="danger">Danger</button>
    <button _button="warning">Warning</button>
    <button _button="info">Info</button>
    <button _button="light">Light</button>
    <button _button="dark">Dark</button>
    <button _button="link">Link</button>
  `,
  styles: [`
    button {
      margin-right: 5px;
    }
  `]
})
export class NSDemoButtonBasicComponent {
}
