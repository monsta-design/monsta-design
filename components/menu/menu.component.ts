import {AfterViewInit, Component, ContentChildren, ElementRef, Input} from '@angular/core';
import {NSMenuItemComponent} from "./menu-item.component";
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'ns-menu',
  template: `
    <ng-content></ng-content>`,
  styleUrls: ['./menu.component.scss']
})
export class NSMenuComponent implements AfterViewInit {

  @Input() nsAccordion: boolean;
  @Input() nsInterval: Number = 150;
  @ContentChildren(NSMenuItemComponent) items: NSMenuItemComponent[];
  lock = false

  constructor(
    private el: ElementRef,
  ) {
  }

  ngAfterViewInit() {
    this.parse('d-', this.items)
  }

  parse(prefix: string, items: NSMenuItemComponent[], deep: boolean = false) {
    let i = 0
    for (let item of items) {
      item.init(`${prefix}${i++}`, deep, items, this.el.nativeElement)
      this.parse(item.id, item.items, true)
      item.nsStateChange.subscribe((v: NSMenuItemComponent) => {
        if (v.sub) {
          if (v.expand) {
            this.close(v)
          } else {
            this.open(v)
          }
        }
        if (this.nsAccordion === false) {
          return
        }
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
    if (this.lock) {
      return
    }
    this.lock = true
    let mask
    if (item.height > 72) {
      mask = this.createMask()
    }
    if (mask) {
      item.sub.nativeElement.appendChild(mask)
    }
    item.expand = true
    item.sub.nativeElement.style.removeProperty('transition')
    item.sub.nativeElement.style.overflow = 'hidden'
    item.sub.nativeElement.style.height = '0px'
    anime({
      targets: item.sub.nativeElement,
      height: item.height,
      duration: this.nsInterval,
      easing: 'easeInOutSine',
      complete: (anim) => {
        item.sub.nativeElement.style.removeProperty('overflow')
        item.sub.nativeElement.style.removeProperty('height')
        if (mask) {
          item.sub.nativeElement.removeChild(mask)
        }
        this.lock = false
      }
    })
  }

  close(item: NSMenuItemComponent) {
    item.sub.nativeElement.style.overflow = 'hidden'
    anime({
      targets: item.sub.nativeElement,
      height: 0,
      duration: this.nsInterval,
      easing: 'easeInOutSine',
      complete: (anim) => {
        item.expand = false
        this.closeChildren(item)
      }
    })
  }

  closeChildren(item: NSMenuItemComponent) {
    for (const v of item.items) {
      v.expand = false
      this.closeChildren(v)
    }
  }
}
