import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-flip-check',
  template: `
    <ns-flip [nsBack]="backTpl"
             [nsTrigger]="link"
             nsBlurSelector="input"
             [nsData]="value"
             [nsBlurCallback]="check">
      我是一段很长的话！<a #link href="javascript:;">点击我编辑</a>
    </ns-flip>
    <ng-template #backTpl>
      <input [(ngModel)]="value" type="text" placeholder="输入2，失去焦点我就翻转">
    </ng-template>
  `,
  styles: [`
  `]
})
export class NSDemoFlipCheckComponent {
  value = ''
  check = (data) => {
    return data == '2'
  }
}
