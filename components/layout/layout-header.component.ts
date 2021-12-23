import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'ns-layout-header',
  template: `
    <ng-content></ng-content>`,
})
export class NSLayoutHeaderComponent {
  @Input() nsZoom: boolean | 'false' | 'true' = false

  @HostBinding('style') get getStyle() {
    if (this.nsZoom === false || this.nsZoom === 'false') {
      return {
        flexShrink: 0,
        flexGrow: 0,
      }
    }
    return null
  }
}
