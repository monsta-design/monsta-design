import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-checkbox-basic',
  template: `
    <ns-checkbox nsLabel="是否同意"></ns-checkbox>
    <ns-checkbox nsLabel="是否同意" [nsChecked]="true"></ns-checkbox>
  `,
  styles: [`
  `]
})
export class NSDemoCheckboxBasicComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
