import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-button-basic',
  template: `
    <ns-button type="primary">Primary</ns-button>
  `,
})
export class NSDemoButtonBasicComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
