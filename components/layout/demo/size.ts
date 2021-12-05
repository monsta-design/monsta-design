import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-size',
  template: `
    <div style="height: 10px" bg="primary" w="25"></div>
    <div style="height: 10px" bg="secondary" w="50"></div>
    <div style="height: 10px" bg="success" w="75"></div>
    <div style="height: 10px" bg="danger" w="100"></div>
  `,
})
export class NSDemoLayoutSizeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
