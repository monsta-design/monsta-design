import {Component, Input, OnInit} from '@angular/core';
import {generateID} from 'monsta-design/core';

@Component({
  selector: 'ns-range',
  template: `
    <label [for]="id" class="bs-form-label">{{nsLabel}}</label>
    <input type="range" class="bs-form-range" [id]="id">
  `
})
export class NSRangeComponent implements OnInit {

  @Input() nsLabel: string
  @Input() nsChecked: boolean
  @Input() nsDisabled: boolean
  @Input() id: string

  constructor() {
    if (!this.id) {
      this.id = generateID()
    }
  }

  ngOnInit(): void {
  }

}
