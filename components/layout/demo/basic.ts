import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-basic',
  template: `
    <ns-row>
      <ns-col bg="primary">1</ns-col>
      <ns-col bg="secondary">2</ns-col>
    </ns-row>
  `,
})
export class NSDemoLayoutBasicComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
