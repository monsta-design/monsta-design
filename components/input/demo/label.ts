import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-input-label',
  template: `
    <div mb="3">
      <label _label>Email address</label>
      <input _input type="email" placeholder="name@example.com">
    </div>
    <div mb="3">
      <label _label>Example textarea</label>
      <textarea _input rows="3"></textarea>
    </div>
  `,
  styles: [`
  `]
})
export class NSDemoInputLabelComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
