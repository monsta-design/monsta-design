import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-input-basic',
  template: `
    <button _border="all" _border_color="light"></button>
    <input type="text" placeholder="Default input">
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
