import {Component, Input, OnInit} from '@angular/core';
import {generateID} from "../types";

@Component({
  selector: 'ns-radio',
  template: `
    <div class="bs-form-check">
      <input class="bs-form-check-input" type="radio" [id]="id" [checked]="nsChecked"
             [disabled]="nsDisabled">
      <label class="bs-form-check-label" [for]="id">
        {{ nsLabel }}
      </label>
    </div>
  `
})
export class NSRadioComponent implements OnInit {

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
