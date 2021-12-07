import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-style-bg',
  template: `
    <span bg="primary">primary</span>
    <span bg="secondary">secondary</span>
    <span bg="success">success</span>
    <span bg="danger">danger</span>
    <span bg="warning">warning</span>
    <span bg="info">info</span>
    <span bg="light">light</span>
    <span bg="danger">danger</span>
    <span bg="body">body</span>
    <span bg="white">white</span>
    <span bg="transparent">transparent</span>
    <span bg="rand">rand</span>
    <span bg="#868e96">#868e96</span>
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
