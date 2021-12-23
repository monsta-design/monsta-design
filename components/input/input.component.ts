import {Component, HostBinding, Input} from '@angular/core';
import {generateID} from 'monsta-design/core';


@Component({
  selector: 'ns-input',
  template: `
    <label *ngIf="nsLabel" [for]="id" class="bs-form-label">{{nsLabel}}</label>
    <span *ngIf="nsPrefix!==null" class="bs-input-group-text">{{ nsPrefix }}</span>
    <input [type]="nsType" class="bs-form-control" [ngClass]="getInputSize" [id]="id"
           [placeholder]="nsPlaceholder||''">
    <span *ngIf="nsSuffix!==null" class="bs-input-group-text">{{ nsSuffix }}</span>
  `,
  styleUrls: ['./input.component.scss'],
  host: {
    class: 'bs-mb-3' // 需要和 Size 联动
  }
})
export class NSInputComponent {
  @Input() nsLabel: string = null
  @Input() id: string = null
  @Input() nsType: 'text' | 'password' = 'text'
  @Input() nsSize: 'sm' | 'lg' | '' = ''
  @Input() nsPrefix: string = null
  @Input() nsSuffix: string = null
  @Input() nsPlaceholder: string

  constructor() {
    if (this.id === null) {
      this.id = generateID()
    } else {
      this.id = `${this.id}_input`
    }
  }

  @HostBinding('class') get getClass() {
    let classes = []
    if (this.nsPrefix !== null || this.nsSuffix !== null) {
      classes.push('bs-input-group')
    }
    return classes.join(' ')
  }

  get getInputSize() {
    if (this.nsSize === '') {
      return null
    }
    return 'bs-form-control-' + this.nsSize
  }
}
