import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-input-basic',
  template: `
    <ns-input nsPlaceholder="Example input placeholder"></ns-input>
  `,
  styles: [`
  `]
})
export class NSDemoInputBasicComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
