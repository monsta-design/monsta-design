import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-flip-basic',
  template: `
    <ns-flip (click)="showBack=!showBack" [nsShowBack]="showBack" [nsFront]="frontTpl" [nsBack]="backTpl">
      <ng-template #frontTpl>
        点我，我是正面
      </ng-template>
      <ng-template #backTpl>
        点我，我是反面
      </ng-template>
    </ns-flip>
  `,
  styles: [`
  `]
})
export class NSDemoFlipBasicComponent {
  showBack = false;
}
