import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-input-basic',
  template: `
    <input _input type="text" placeholder="Default input">
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
