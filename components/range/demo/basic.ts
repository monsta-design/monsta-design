import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-range-basic',
  template: `
    <ns-range nsLabel="年龄"></ns-range>
  `,
  styles: [`
  `]
})
export class NSDemoRangeBasicComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
