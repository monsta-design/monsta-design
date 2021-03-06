import {AfterViewInit, Component, ContentChildren, ElementRef, Input} from '@angular/core';
import {NSScrollspyItemComponent} from "./scrollspy-item.component";

@Component({
  selector: 'ns-scrollspy',
  template: `
    <ng-content></ng-content>`,
  styleUrls: ['./scrollspy.component.scss']
})
export class NSScrollspyComponent implements AfterViewInit {

  @Input() container: HTMLElement = document.body;
  @ContentChildren(NSScrollspyItemComponent) items: NSScrollspyItemComponent[] = []
  width: number
  height: number

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    this.width = this.el.nativeElement.offsetWidth
    this.height = this.el.nativeElement.offsetHeight
    for (let item of this.items) {
      item.trigger.subscribe((v: NSScrollspyItemComponent) => {
        let target = this.container.querySelector(`[id="${item.target}"]`)
        if (!target) {
          return
        }
        // @ts-ignore
        window.scrollTo(0, target.offsetTop)
      })
    }
  }

}
