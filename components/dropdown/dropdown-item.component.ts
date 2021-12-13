import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'ns-dropdown-item',
  template: `
    <div class="bs-dropdown-item">
      <ng-content></ng-content>
    </div>`,
  styleUrls: ['./dropdown.scss']
})
export class DropdownItemComponent {
  @Input() value: any
}
