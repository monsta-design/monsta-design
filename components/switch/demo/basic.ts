import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-switch-basic',
  template: `
    <ns-switch nsLabel="是否同意"></ns-switch>
    <ns-switch nsLabel="是否同意" [nsChecked]="true"></ns-switch>
  `,
  styles: [`
  `]
})
export class NSDemoSwitchBasicComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
