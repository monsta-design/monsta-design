import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-button-size',
  template: `
    <ns-button type="primary" size="lg">lg</ns-button>
    <ns-button type="primary" size="md">md</ns-button>
    <ns-button type="primary" size="sm">sm</ns-button>
  `,
  styles: [`
    ns-button {
      margin-right: 5px;
    }
  `]
})
export class NSDemoButtonSizeComponent {
}
