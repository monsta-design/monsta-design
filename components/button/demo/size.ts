import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-button-size',
  template: `
    <button nsButton="primary" nsButton_size="lg">lg</button>
    <button nsButton="primary" nsButton_size="md">md</button>
    <button nsButton="primary" nsButton_size="sm">sm</button>
  `,
  styles: [`
    button {
      margin-right: 5px;
    }
  `]
})
export class NSDemoButtonSizeComponent {
}
