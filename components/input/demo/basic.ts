import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-input-basic',
  template: `
    <input nsInput placeholder="Basic usage"/>
    <input nsInput placeholder="Basic usage" disabled/>
  `,
  styles: [`
    input {
      margin-bottom: 1rem;
    }
  `]
})
export class NSDemoInputBasicComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
