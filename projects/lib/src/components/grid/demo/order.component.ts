import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-grid-order',
  template: `
    <div ns-container>
      <div ns-row>
        <div ns-col nsOrder="1">1</div>
        <div ns-col nsOrder="3">2</div>
        <div ns-col nsOrder="2">3</div>
      </div>
    </div>`,
  styles: [`
    .col {
      background: gray;
    }
  `]
})
export class NSDemoGridOrderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

