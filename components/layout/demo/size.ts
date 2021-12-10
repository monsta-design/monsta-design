import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-size',
  template: `
    <div style="height: 10px" _bg="primary" _w="25"></div>
    <div style="height: 10px" _bg="secondary" _w="50"></div>
    <div style="height: 10px" _bg="success" _w="75"></div>
    <div style="height: 10px" _bg="danger" _w="100"></div>
  `,
})
export class NSDemoLayoutSizeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
