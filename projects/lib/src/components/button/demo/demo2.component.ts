import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'button-demo2',
  template: `
    <ns-button-group>
      <ns-button _type="primary">Left</ns-button>
      <ns-button _type="primary">Middle</ns-button>
      <ns-button _type="primary">Right</ns-button>
    </ns-button-group>
  `,
})
export class ButtonDemo2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
