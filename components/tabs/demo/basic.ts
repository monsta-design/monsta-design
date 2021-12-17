import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-tabs-basic',
  template: `
    <ns-tabs>
      <ns-tab nsTitle="选项一">内容一</ns-tab>
      <ns-tab nsTitle="选项二">内容二</ns-tab>
      <ns-tab nsTitle="选项三">内容三</ns-tab>
    </ns-tabs>
  `,
  styles: [`
  `]
})
export class NSDemoTabsBasicComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
