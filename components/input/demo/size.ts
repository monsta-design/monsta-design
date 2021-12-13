import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-input-size',
  template: `
    <ns-input nsSize="lg" nsPlaceholder="lg"></ns-input>
    <ns-input nsPlaceholder="default"></ns-input>
    <ns-input nsSize="sm" nsPlaceholder="sm"></ns-input>
  `,
  styles: [`
    ns-input {
      margin-bottom: 1rem;
    }
  `]
})
export class NSDemoInputSizeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
