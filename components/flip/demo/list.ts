import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-flip-list',
  template: `
    <div *ngFor="let item of items;let index = index">
      <ns-flip [nsBack]="backTpl">
        点我，我是正面 {{index}}
      </ns-flip>
      <ng-template #backTpl>
        点我，我是反面 {{index}}，失去焦点我就翻转
      </ng-template>
    </div>
  `,
  styles: [`
  `]
})
export class NSDemoFlipListComponent {
  items = [false, false, false, false, false]
  showBack = false;
}
