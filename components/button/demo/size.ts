import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-button-size',
  template: `
    <button _button="primary" _button_size="lg">lg</button>
    <button _button="primary" _button_size="md">md</button>
    <button _button="primary" _button_size="sm">sm</button>
  `,
  styles: [`
    button {
      margin-right: 5px;
    }
  `]
})
export class NSDemoButtonSizeComponent {
}
