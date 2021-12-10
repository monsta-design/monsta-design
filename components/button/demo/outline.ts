import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-button-outline',
  template: `
    <button nsButton="primary" nsButtonOutline="true">Primary</button>
    <button nsButton="secondary" nsButtonOutline="true">Secondary</button>
    <button nsButton="success" nsButtonOutline="true">Success</button>
    <button nsButton="danger" nsButtonOutline="true">Danger</button>
    <button nsButton="warning" nsButtonOutline="true">Warning</button>
    <button nsButton="info" nsButtonOutline="true">Info</button>
    <button nsButton="light" nsButtonOutline="true">Light</button>
    <button nsButton="dark" nsButtonOutline="true">Dark</button>
    <button nsButton="link" nsButtonOutline="true">Link</button>
  `,
  styles: [`
    button {
      margin-right: 5px;
    }
  `]
})
export class NSDemoButtonOutlineComponent {
}
