import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewChild
} from "@angular/core";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'ns-menu-item',
  template: `
    <a #a class="ns-menu-link" [ngClass]="{'has-caret':items.length>0}" (click)="toggle()">
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
  @Input() _link: string;
  @Input() _icon: IconDefinition;
  @Output() _stateChange: EventEmitter<NSMenuItemComponent> = new EventEmitter<NSMenuItemComponent>();
  @ViewChild('a') a: ElementRef;
  @ViewChild('sub') sub: ElementRef;
  @ContentChildren(NSMenuItemComponent) items: NSMenuItemComponent[];

  @HostBinding('class.expand') get expandValid() {
    return this.expand
  }

  @HostBinding('class.deep') get deepValid() {
    return this.deep
  }

  id: string
  deep: boolean
  expand = false
  caret = faCaretDown
  height: number
  depth: number
  siblings: NSMenuItemComponent[]

  ngAfterViewInit() {
    if (this._link) {
      this.setLink()
    }
  }

  init(id: string, deep: boolean, siblings: NSMenuItemComponent[], elem: HTMLElement) {
    this.id = id
    setTimeout(() => {
      this.deep = deep
    }, 0)
    this.siblings = siblings
    this.initHeight(elem)
  }

  initHeight(container: HTMLElement) {
    if (!this.sub || this.height > 0) {
      return
    }
    let clone = this.sub.nativeElement.cloneNode(true)
    clone.style.display = 'block'
    clone.style.position = 'absolute'
    clone.style.visibility = 'hidden'
    container.append(clone)
    this.height = clone.offsetHeight
    container.removeChild(clone)
  }

  toggle() {
    console.log('ok')
    this._stateChange.emit(this)
  }

  setLink() {
    this.a.nativeElement.setAttribute('href', this._link)
  }

}
