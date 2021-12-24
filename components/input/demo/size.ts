import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-input-size',
  template: `
    <input nsInput nsInputSize="lg" placeholder="lg"/>
    <input nsInput nsInputSize="default" placeholder="default"/>
    <input nsInput nsInputSize="sm" placeholder="sm"/>
  `,
  styles: [`
    input {
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
