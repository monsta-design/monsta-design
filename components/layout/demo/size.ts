import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-size',
  template: `
    <div style="height: 10px" nsBackground="primary" w="25"></div>
    <div style="height: 10px" nsBackground="secondary" w="50"></div>
    <div style="height: 10px" nsBackground="success" w="75"></div>
    <div style="height: 10px" nsBackground="danger" w="100"></div>
  `,
})
export class NSDemoLayoutSizeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
