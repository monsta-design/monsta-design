import {AfterContentInit, Component, ContentChildren, ElementRef, HostBinding, Input, OnInit} from '@angular/core';
import {isTrue, NS_BOOL} from "../types";

@Component({
  selector: 'ns-skeletons',
  template: '<ng-content></ng-content>',
})
export class NSSkeletonsComponent implements AfterContentInit {

  @Input() nsActive: NS_BOOL

  @HostBinding('class') get getClass() {
    if (isTrue(this.nsActive)) {
      return 'bs-placeholder-glow'
    }
  }

  constructor(private el: ElementRef) {
  }

  ngAfterContentInit() {
    // console.log(this.el.nativeElement.children)
    // for (let child of this.el.nativeElement.children) {
    //   child.classList.add('bs-placeholder')
    // }
  }

}
