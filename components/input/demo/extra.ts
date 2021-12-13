import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-input-extra',
  template: `
    <ns-input nsPlaceholder="Example input placeholder" nsPrefix="@" nsSuffix=".com"></ns-input>
  `,
  styles: [`
    ns-input {
      margin-bottom: 1rem;
    }
  `]
})
export class NSDemoInputExtraComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
