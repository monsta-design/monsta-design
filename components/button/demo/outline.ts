import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-button-outline',
  template: `
    <button _button="primary" _button_outline="true">Primary</button>
    <button _button="secondary" _button_outline="true">Secondary</button>
    <button _button="success" _button_outline="true">Success</button>
    <button _button="danger" _button_outline="true">Danger</button>
    <button _button="warning" _button_outline="true">Warning</button>
    <button _button="info" _button_outline="true">Info</button>
    <button _button="light" _button_outline="true">Light</button>
    <button _button="dark" _button_outline="true">Dark</button>
    <button _button="link" _button_outline="true">Link</button>
  `,
  styles: [`
    button {
      margin-right: 5px;
    }
  `]
})
export class NSDemoButtonOutlineComponent {
}
