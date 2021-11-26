import {AfterViewInit, Component, ContentChildren, Input} from '@angular/core';
import {NSMenuItemComponent} from "./menu-item.component";

@Component({
  selector: 'ns-menu',
  template: `
    <ng-content></ng-content>`,
  styleUrls: ['./menu.component.scss']
})
export class NSMenuComponent implements AfterViewInit {

  @Input() _accordion: Boolean = false;
  @ContentChildren(NSMenuItemComponent) items: NSMenuItemComponent[];

  ngAfterViewInit() {
    if (!this._accordion) {
      return
    }
    let i = 0
    for (let item of this.items) {
      item.num = `${i++}`
      item._stateChange.subscribe((num) => {
        for (let item of this.items) {
          if (item.num != num) {
            if (item.expand) {
              item.close()
            }
          }
        }
      })
    }
  }
}
