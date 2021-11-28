import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'counter-demo1',
  template: `
    <ns-counter></ns-counter>
  `,
  styleUrls: ['./demo1.component.css']
})
export class CounterDemo1Component implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
