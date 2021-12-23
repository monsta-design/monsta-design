import {AfterViewInit, Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {generateID, isTrue, NS_BOOL} from 'monsta-design/core';

@Component({
  selector: 'ns-checkbox',
  template: `
    <div class="ns-mask-transparent" *ngIf="nsToggle!==null" (click)="toggle()"></div>
    <div class="bs-form-check">
      <input class="bs-form-check-input" type="checkbox" [(ngModel)]="value" [id]="id" [checked]="nsChecked">
      <label *ngIf="nsLabel" class="bs-form-check-label bs-user-select-none" [for]="id">
        {{ nsLabel}}
      </label>
    </div>
  `
})
export class NSCheckboxComponent {

  @Input() nsInline: NS_BOOL
  @Input() nsLabel: string
  @Input() id: string = null
  @Input() nsChecked: boolean
  @Input() nsToggle: () => boolean = null
  @Output() nsChange: EventEmitter<any> = new EventEmitter<any>()

  value = false

  constructor() {
    if (!this.id) {
      this.id = generateID()
    }
  }

  @HostBinding('class') get getClass() {
    let classes = []
    if (this.nsToggle !== null) {
      classes.push('bs-position-relative bs-d-block')
    }
    if (isTrue(this.nsInline)) {
      if (classes.length > 0) {
        classes[0] = 'bs-position-relative'
      }
      classes.push('bs-form-check-inline')
    }
    return classes.join(' ')
  }

  toggle() {
    console.log(this.nsToggle())
    if (this.nsToggle()) {
      this.value = !this.value
    }
  }
}
