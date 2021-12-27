import {
  AfterViewInit, ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter, forwardRef,
  HostBinding,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {generateID, isTrue, NS_BOOL, OnChangeType, OnTouchedType} from 'monsta-design/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'ns-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="ns-mask-transparent" *ngIf="nsToggleCheck!==null" (click)="toggle()"></div>
    <div class="bs-form-check">
      <input class="bs-form-check-input" type="checkbox" [id]="id" [ngModel]="nsChecked"
             (ngModelChange)="doChange($event)" [checked]="nsChecked">
      <label *ngIf="nsLabel" class="bs-form-check-label bs-user-select-none" [for]="id">
        {{ nsLabel}}
      </label>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NSCheckboxComponent),
      multi: true
    }
  ],
})
export class NSCheckboxComponent implements ControlValueAccessor {

  @Input() nsInline: NS_BOOL
  @Input() nsLabel: string
  @Input() id: string = null
  @Input() nsChecked: boolean
  @Input() nsDisabled: boolean
  @Input() nsToggleCheck: () => boolean = null
  @Output() nsChange: EventEmitter<any> = new EventEmitter<any>()

  onChange: OnChangeType = () => {
  };
  onTouched: OnTouchedType = () => {
  };

  constructor(
    private cd: ChangeDetectorRef
  ) {
    if (!this.id) {
      this.id = generateID()
    }
  }

  @HostBinding('class') get getClass() {
    let classes = []
    if (this.nsToggleCheck !== null) {
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

  // implements ControlValueAccessor start
  writeValue(obj: any): void {
    this.nsChecked = obj
    console.log('写入值', obj)
    this.cd.markForCheck()
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    this.nsDisabled = isDisabled;
    this.cd.markForCheck();
  }

  // implements ControlValueAccessor end

  toggle() {
    if (this.nsToggleCheck) {
      this.nsChecked = this.nsToggleCheck()
    }
  }

  doChange(checked) {
    this.nsChecked = checked
    this.onChange(checked)
  }
}
