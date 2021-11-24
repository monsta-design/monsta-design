import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-card-basic',
  template: `
    <ns-card nsTitle="测试标题" [nsBody]="body">
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
