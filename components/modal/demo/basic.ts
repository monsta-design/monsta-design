import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-modal-basic',
  template: `
    <button nsButton="primary" (click)="toggle()">打开</button>{{show}}
    <ns-modal [(nsVisible)]="show">
      <div *nsModalContent>
        <input nsInput type="text">
      </div>
    </ns-modal>
  `,
  styles: [`
  `]
})
export class NSDemoModalBasicComponent {

  show = false

  toggle() {
    this.show = !this.show
  }
}
