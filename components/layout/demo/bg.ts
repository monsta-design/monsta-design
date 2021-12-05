import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-layout-bg',
  template: `
    <div [bg]="'primary'" style="width: 50px;height: 50px;"></div>
    <div bg="rand" style="width: 50px;height: 50px;"></div>
  `,
})
export class NSDemoLayoutBgComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
