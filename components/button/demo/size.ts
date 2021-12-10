import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-button-size',
  template: `
    <button nsButton="primary" nsButtonSize="lg">lg</button>
    <button nsButton="primary" nsButtonSize="md">md</button>
    <button nsButton="primary" nsButtonSize="sm">sm</button>
  `,
  styles: [`
    button {
      margin-right: 5px;
    }
  `]
})
export class NSDemoButtonSizeComponent {
}
