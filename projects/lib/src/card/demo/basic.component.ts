import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-card-basic',
  template: `
    <ns-card title="好啊" _title="测试标题" [_content]="body">
      <ng-template #body>
        <ns-alert>这是一段提示</ns-alert>
      </ng-template>
    </ns-card>
  `,
  styles: [`
  `]
})
export class NSDemoCardBasicComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
