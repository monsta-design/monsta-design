import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-style-bg',
  template: `
    <span _bg="primary">primary</span>
    <span _bg="secondary">secondary</span>
    <span _bg="success">success</span>
    <span _bg="danger">danger</span>
    <span _bg="warning">warning</span>
    <span _bg="info">info</span>
    <span _bg="light">light</span>
    <span _bg="danger">danger</span>
    <span _bg="body">body</span>
    <span _bg="white">white</span>
    <span _bg="transparent">transparent</span>
    <span _bg="rand">rand</span>
    <span _bg="#868e96">#868e96</span>
  `,
  styles: [`
    hr {
      opacity: 1;
      background: #f0f0f0;
    }
    span {
      display: inline-flex;
      width: 6rem;
      height: 6rem;
      margin: 0.25rem;
      font-size: 14px;
      justify-content: center;
      align-items: center;
    }
  `]
})
export class NSDemoStyleBgComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
