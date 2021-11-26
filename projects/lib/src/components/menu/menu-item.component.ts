import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren, ElementRef,
  EventEmitter, HostBinding,
  Input,
  OnInit,
  Output, ViewChild
} from '@angular/core';
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";


@Component({
  selector: 'ns-menu-item',
  template: `
    <a class="ns-menu-link" (click)="toggle()">
      <span class="ns-menu-icon" *ngIf="_icon"><fa-icon [icon]="_icon"></fa-icon></span>
      <span class="ns-menu-label">{{ _label }}</span>
      <span class="ns-menu-caret" *ngIf="items.length>0"><fa-icon [icon]="caret"></fa-icon></span>
    </a>
    <div class="ns-menu-sub" #sub *ngIf="items.length>0">
      <ng-content #content></ng-content>
    </div>`,
  host: {
    class: 'ns-menu-item'
  }
})
export class NSMenuItemComponent implements AfterViewInit {
  @Input() _label: string;
  @Input() _icon: IconDefinition;
  @Output() _stateChange: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('sub') sub: ElementRef;
  @ContentChildren(NSMenuItemComponent) items: NSMenuItemComponent[];

  @HostBinding('class.expand') get expandValid() {
    return this.expand
  }

  num: string
  expand = false
  caret = faCaretDown
  cost = 200
  lock = false
  private clone: HTMLElement;
  private height: number;

  ngAfterViewInit() {
    if (!this.sub) {
      return
    }
    this.clone = this.sub.nativeElement.cloneNode(true)
    this.clone.style.display = 'block'
    this.clone.style.position = 'absolute'
    this.clone.style.visibility = 'hidden'
    this.sub.nativeElement.parentElement.append(this.clone)
    this.height = this.clone.offsetHeight
    this.sub.nativeElement.parentElement.removeChild(this.clone)
  }

  toggle() {
    if (this.lock) {
      return
    }
    this.lock = true
    this._stateChange.emit(this.num)
    if (!this.sub) {
      return
    }
    if (this.expand) {
      this.close()
    } else {
      this.open()
    }
  }

  createMask(): HTMLElement {
    let mask = document.createElement('div')
    mask.classList.add('ns-menu-mask')
    return mask
  }

  open() {
    const mask = this.createMask()
    this.expand = true
    this.sub.nativeElement.appendChild(mask)
    this.sub.nativeElement.style.overflow = 'hidden'
    this.sub.nativeElement.style.height = '0px'
    const steps = 50
    const y = this.height / steps
    let i = 0
    const t = setInterval(() => {
      i = i + y
      if (i > this.height) {
        i = this.height
      }
      this.sub.nativeElement.style.height = i + 'px'
      if (i == this.height) {
        clearInterval(t)
        this.lock = false
        this.sub.nativeElement.removeChild(mask)
        this.sub.nativeElement.style.removeProperty('overflow')
        this.sub.nativeElement.style.removeProperty('height')
      }
    }, this.cost / steps)
  }

  close() {
    this.sub.nativeElement.style.overflow = 'hidden'
    const steps = 50
    const y = this.height / steps
    let i = this.height
    const t = setInterval(() => {
      i = i - y
      if (i < 0) {
        i = 0
      }
      this.sub.nativeElement.style.height = i + 'px'
      if (i == 0) {
        this.expand = false
        this.lock = false
        this.sub.nativeElement.style.removeProperty('overflow')
        this.sub.nativeElement.style.removeProperty('height')
        clearInterval(t)
      }
    }, this.cost / steps)
  }
}
