import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-modal-basic',
  template: `
    <button (click)="show=!show">打开</button>
    <ns-modal [nsShow]="show" [nsTitle]="title">
      <ng-template #title></ng-template>
      Content...
    </ns-modal>
  `,
  styles: [`
  `]
})
export class NSDemoModalBasicComponent implements OnInit {

  show = false

  constructor() {
  }

  ngOnInit(): void {
  }

}
