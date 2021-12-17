import {
  AfterViewInit,
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
    <a #a class="ns-menu-link" [ngClass]="{'has-caret':items.length>0}" (click)="toggle()"
       [routerLink]="nsLink" [state]="nsState">
      <span class="ns-menu-icon" *ngIf="nsIcon"><fa-icon [icon]="nsIcon"></fa-icon></span>
      <span class="ns-menu-label">{{ nsLabel }}</span>
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
  @Input() nsLabel: string;
  @Input() nsLink: string;
  @Input() nsIcon: IconDefinition;
  @Input() nsState: {
    [k: string]: any;
  };
  @Output() nsStateChange: EventEmitter<NSMenuItemComponent> = new EventEmitter<NSMenuItemComponent>();
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
    // if (this.nsLink) {
    //   this.setLink()
    // }
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
    this.nsStateChange.emit(this)
  }

  setLink() {
    this.a.nativeElement.setAttribute('href', this.nsLink)
  }

}
