import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-dropdown-basic',
  template: `
    <ns-dropdown nsTitle="Dropdown">
      <ns-dropdown-item>Menu Item</ns-dropdown-item>
      <ns-dropdown-item>Menu Item</ns-dropdown-item>
      <ns-dropdown-divider></ns-dropdown-divider>
      <ns-dropdown-item>Menu Item</ns-dropdown-item>
    </ns-dropdown>
  `,
  styles: [`
  `]
})
export class NSDemoDropdownBasicComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
