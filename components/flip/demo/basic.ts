import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-flip-basic',
  template: `
    <ns-flip (click)="showBack=!showBack" [nsShowBack]="showBack" [nsBack]="backTpl">
      点我，我是正面
    </ns-flip>
    <ng-template #backTpl>
      点我，我是反面
    </ng-template>
  `,
  styles: [`
  `]
})
export class NSDemoFlipBasicComponent {
  showBack = false;
}
