import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-select-multiple',
  template: `
    <ns-select [nsItems]="items" [nsMultiple]="true"></ns-select>
  `,
  styles: [`
  `]
})
export class NSDemoSelectMultipleComponent {

  items = [
    {
      label: "One",
      value: 1
    },
    {
      label: "Two",
      value: 2
    },
    {
      label: "Three",
      value: 3
    }
  ]

}
