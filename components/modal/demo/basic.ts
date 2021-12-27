import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-modal-basic',
  template: `
    <button (click)="toggle()">打开</button>{{show}}
    <ns-modal [(nsShow)]="show" [nsTitle]="'登录'">
      Content...
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
