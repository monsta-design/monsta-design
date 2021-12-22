import {AfterViewInit, Component, ElementRef, OnDestroy} from '@angular/core';

@Component({
  selector: 'ns-scroller',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./scroller.component.scss']
})
export class NSScrollerComponent {

  constructor(private el: ElementRef) {
  }

  scrollX(distance: number, absolute?: boolean) {
    this.el.nativeElement.scrollTo({
      left: absolute ? distance : this.el.nativeElement.scrollLeft + distance,
      behavior: 'smooth'
    })
  }

  scrollY(distance: number, absolute?: boolean) {
    this.el.nativeElement.scrollTo({
      top: absolute ? distance : this.el.nativeElement.scrollTop + distance,
      behavior: 'smooth'
    })
  }

  scrollStart() {
    this.el.nativeElement.scrollTo({
      left: 0,
      behavior: 'smooth'
    })
  }

  scrollEnd() {
    this.el.nativeElement.scrollTo({
      left: this.el.nativeElement.scrollWidth,
      behavior: 'smooth'
    })
  }

  scrollTop() {
    this.el.nativeElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  scrollBottom() {
    this.el.nativeElement.scrollTo({
      top: this.el.nativeElement.scrollHeight,
      behavior: 'smooth'
    })
  }
}
