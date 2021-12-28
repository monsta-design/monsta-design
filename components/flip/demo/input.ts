import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-flip-input',
  template: `
    <ns-flip [nsBack]="backTpl" nsBlurSelector="input">
      <span (click)="showBack=true">点我，我是正面</span>
    </ns-flip>
    <ng-template #backTpl>
      <input type="text" placeholder="我失去焦点我就翻转">
    </ng-template>
  `,
  styles: [`
  `]
})
export class NSDemoFlipInputComponent {
  showBack = false;
}
