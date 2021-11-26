import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-modal-basic',
  template: `
    <button (click)="basicModal = !basicModal">基础弹窗</button>
    <ns-modal [nsShow]="basicModal" [nsTitle]="'基础弹窗'">
      正文...
    </ns-modal>

    <button (click)="tplTitleModal = !tplTitleModal">标题模板</button>
    <ns-modal [nsShow]="tplTitleModal" [nsTitle]="title">
      <ng-template #title>
        标题模板
      </ng-template>
      正文...
    </ns-modal>
  `,
  styles: [`
  `]
})
export class NsDemoModalBasicInputComponent {
  basicModal: boolean = false;
  tplTitleModal: boolean = false;
}
