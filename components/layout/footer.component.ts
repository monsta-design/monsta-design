import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'ns-footer',
  template: `
    <ng-content></ng-content>`,
})
export class NSFooterComponent {
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
