import {Component, Input, OnInit} from '@angular/core';

export interface SelectItem {
  label: string,
  value: any
}

@Component({
  selector: 'ns-select',
  template: `
    <select class="bs-form-select" [disabled]="nsDisabled" [multiple]="nsMultiple">
      <option *ngFor="let item of nsItems" [value]="item.value" [selected]="item.value == nsSelected">
        {{ item.label }}
      </option>
    </select>
  `,
})
export class SelectComponent implements OnInit {

  @Input() nsItems: SelectItem[] = []
  @Input() nsSelected: any
  @Input() nsMultiple: boolean
  @Input() nsPlaceholder: string
  @Input()
  nsDisabled: boolean


  constructor() {
  }

  ngOnInit(): void {
  }

}
