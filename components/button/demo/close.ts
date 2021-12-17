import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-button-close',
  template: `
    <button nsCloseButton></button>
  `,
  styles: [`
    button {
      margin-right: 5px;
    }
  `]
})
export class NSDemoButtonCloseComponent {
}
