import {Component, Input, OnInit} from '@angular/core';
import {generateID} from 'monsta-design/core';

@Component({
  selector: 'ns-switch',
  template: `
    <div class="bs-form-check bs-form-switch">
      <input class="bs-form-check-input" type="checkbox" [id]="id" [checked]="nsChecked"
             [disabled]="nsDisabled">
      <label class="bs-form-check-label" [for]="id">
        {{ nsLabel }}
      </label>
    </div>
  `
})
export class NSSwitchComponent implements OnInit {

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
