import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'ns-badge',
  template: `
    <ng-content></ng-content>`,
})
export class NSBadgeComponent {

  @HostBinding('class') get getClass() {
    let classes = ['bs-badge']
    return classes.join(' ')
  }

}
