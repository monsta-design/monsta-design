import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-modal-basic',
  template: `
    <button (click)="toggle()">打开</button>
    <ns-modal [(nsShow)]="show" [nsTitle]="'登录'" (nsOnClose)="show=false">
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
