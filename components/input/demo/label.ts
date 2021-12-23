import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-input-label',
  template: `
    <ns-input nsLabel="用户名"></ns-input>
    <ns-input nsLabel="密码"></ns-input>
  `,
})
export class NSDemoInputLabelComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
