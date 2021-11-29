import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'button-demo1',
  template: `
    <div>
      <ns-button _type="primary">Primary</ns-button>
      <ns-button _type="secondary">Secondary</ns-button>
      <ns-button _type="success">Success</ns-button>
      <ns-button _type="danger">Danger</ns-button>
      <ns-button _type="warning">Warning</ns-button>
      <ns-button _type="info">Info</ns-button>
      <ns-button _type="light">Light</ns-button>
      <ns-button _type="dark">Dark</ns-button>
      <ns-button _type="link">Link</ns-button>
    </div>
    <br>
    <div>
      <ns-button _outline="true" _type="primary">Primary</ns-button>
      <ns-button _outline="true" _type="secondary">Secondary</ns-button>
      <ns-button _outline="true" _type="success">Success</ns-button>
      <ns-button _outline="true" _type="danger">Danger</ns-button>
      <ns-button _outline="true" _type="warning">Warning</ns-button>
      <ns-button _outline="true" _type="info">Info</ns-button>
      <ns-button _outline="true" _type="light">Light</ns-button>
      <ns-button _outline="true" _type="dark">Dark</ns-button>
      <ns-button _outline="true" _type="link">Link</ns-button>
    </div>
    <br>
    <div>
      <ns-button _type="primary">Primary</ns-button>
      <ns-button _size="sm" _type="secondary">Secondary</ns-button>
      <ns-button _size="md" _type="success">Success</ns-button>
      <ns-button _size="lg" _type="danger">Danger</ns-button>
      <ns-button _size="xl" _type="warning">Warning</ns-button>
      <ns-button _size="xxl" _type="info">Info</ns-button>
    </div>
  `,
  styles: [`
  `]
})
export class ButtonDemo1Component implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
