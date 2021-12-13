import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-radio-basic',
  template: `
    <ns-radio nsLabel="是否同意"></ns-radio>
    <ns-radio nsLabel="是否同意" [nsChecked]="true"></ns-radio>
  `,
  styles: [`
  `]
})
export class NSDemoRadioBasicComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
