import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ns-input-group',
  template: `
    <ng-content></ng-content>`,
  host: {
    class: 'bs-input-group'
  }
})
export class NSInputGroupComponent {
  @Input() nsSize: 'sm' | 'lg' | 'default' = 'default'

  @HostBinding('class') get getClasses() {
    let classes = ['bs-input-group'];
    if (this.nsSize != 'default') {
      classes.push(`bs-input-group-${this.nsSize}`)
    }
    return classes.join(' ');
  }
}
