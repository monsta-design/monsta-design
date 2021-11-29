import {AfterViewInit, Component, ContentChildren, ElementRef, Input} from '@angular/core';
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
  cost = 500
  steps = 50
  lock = false

  constructor(
    private el: ElementRef,
  ) {
  }

  ngAfterViewInit() {
    if (!this._accordion) {
      return
    }
    this.parse('d-', this.items)
  }

  parse(prefix: string, items: NSMenuItemComponent[], deep: boolean = false) {
    let i = 0
    for (let item of items) {
      item.init(`${prefix}${i++}`, deep, items, this.el.nativeElement)
      this.parse(item.id, item.items, true)
      item._stateChange.subscribe((v: NSMenuItemComponent) => {
        setTimeout(() => {
          if (v.sub) {
            if (v.expand) {
              this.close(v)
            } else {
              this.open(v)
            }
          }
        }, 0)
        for (const vv of item.siblings) {
          if (!v.sub || v.id != vv.id) {
            if (vv.expand) {
              this.close(vv)
            }
          }
        }
      })
    }
  }

  createMask(): HTMLElement {
    let mask = document.createElement('div')
    mask.classList.add('ns-menu-mask')
    return mask
  }

  open(item: NSMenuItemComponent) {
    const mask = this.createMask()
    item.expand = true
    item.sub.nativeElement.appendChild(mask)
    item.sub.nativeElement.style.overflow = 'hidden'
    item.sub.nativeElement.style.height = '0px'
    const y = item.height / (this.cost / this.steps)
    let i = 0
    const t = setInterval(() => {
      i = i + y
      if (i > item.height) {
        i = item.height
      }
      item.sub.nativeElement.style.height = i + 'px'
      if (i == item.height) {
        clearInterval(t)
        this.lock = false
        item.sub.nativeElement.removeChild(mask)
        item.sub.nativeElement.style.removeProperty('overflow')
        item.sub.nativeElement.style.removeProperty('height')
      }
    }, this.cost / this.steps)
  }

  close(item: NSMenuItemComponent) {
    item.sub.nativeElement.style.overflow = 'hidden'
    const y = item.height / (this.cost / this.steps)
    let i = item.height
    const t = setInterval(() => {
      i = i - y
      if (i < 0) {
        i = 0
      }
      item.sub.nativeElement.style.height = i + 'px'
      if (i == 0) {
        item.expand = false
        this.lock = false
        item.sub.nativeElement.style.removeProperty('overflow')
        item.sub.nativeElement.style.removeProperty('height')
        this.closeChildren(item)
        clearInterval(t)
      }
    }, this.cost / this.steps)
  }

  closeChildren(item: NSMenuItemComponent) {
    for (const v of item.items) {
      v.expand = false
      this.closeChildren(v)
    }
  }
}
