import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-select-basic',
  template: `
    <ns-select [nsItems]="items"></ns-select>
  `,
  styles: [`
  `]
})
export class NSDemoSelectBasicComponent {

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
