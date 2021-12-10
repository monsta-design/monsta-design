import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'ns-button-group',
  template: `
    <ng-content></ng-content>`,
  host: {
    class: 'btn-group'
  }
})
export class NSButtonGroupComponent {
  @Input() size: 'sm' | 'lg' | '' = null
  @Input() vertical: boolean | 'false' | 'true' = false

  @HostBinding('class') get getClass() {
    let classes = ['bs-btn-group']
    if (this.size) {
      classes.push('bs-btn-group' + this.size)
    }
    if (this.vertical === true || this.vertical === 'true') {
      classes.push('bs-btn-group-vertical')
    }
    return classes.join(' ')
  }
}
