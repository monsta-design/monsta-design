import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-button-outline',
  template: `
    <button nsButton="primary" nsButton_outline="true">Primary</button>
    <button nsButton="secondary" nsButton_outline="true">Secondary</button>
    <button nsButton="success" nsButton_outline="true">Success</button>
    <button nsButton="danger" nsButton_outline="true">Danger</button>
    <button nsButton="warning" nsButton_outline="true">Warning</button>
    <button nsButton="info" nsButton_outline="true">Info</button>
    <button nsButton="light" nsButton_outline="true">Light</button>
    <button nsButton="dark" nsButton_outline="true">Dark</button>
    <button nsButton="link" nsButton_outline="true">Link</button>
  `,
  styles: [`
    button {
      margin-right: 5px;
    }
  `]
})
export class NSDemoButtonOutlineComponent {
}
