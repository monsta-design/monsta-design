import {Component, HostBinding, Input} from '@angular/core';
import {generateID} from 'monsta-design/core';


@Component({
  selector: 'ns-floating-input',
  template: `
    <input [type]="nsType" class="bs-form-control" [id]="id" [placeholder]="null">
    <label [for]="id">{{ nsLabel }}</label>
  `,
  styleUrls: ['./input.component.scss']
})
export class NSFloatingInputComponent {
  @Input() nsLabel: string
  @Input() id: string = null
  @Input() nsType: 'text' | 'password' = 'text'
  @HostBinding('class.bs-d-flex') flex = true;

  // @Input() nsSize: 'sm' | 'lg' | '' = ''

  constructor() {
    if (this.id === null) {
      this.id = generateID()
    } else {
      this.id = `${this.id}_input`
    }
  }

  @HostBinding('class') get getClass() {
    let classes = []
    classes.push('bs-form-floating')
    return classes.join(' ')
  }

  // get getInputSize() {
  //   if (this.nsSize === '') {
  //     return null
  //   }
  //   return 'bs-form-control-' + this.nsSize
  // }
}
