import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-style-shadow',
  template: `
    <div shadow style="width: 100px;height: 30px">1</div>
    <div shadow="none" style="width: 100px;height: 30px">2</div>
    <div shadow="sm" style="width: 100px;height: 30px">3</div>
    <div shadow="lg" style="width: 100px;height: 30px">4</div>
  `,
})
export class NSDemoStyleShadowComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
