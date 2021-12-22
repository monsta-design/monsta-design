import {AfterViewInit, Component, ElementRef, Input, OnDestroy} from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'ns-scroller',
  template: '<ng-content></ng-content>',
  styleUrls: ['./scroller.component.scss']
})
export class NSScrollerComponent implements AfterViewInit, OnDestroy {

  @Input() nsDirection: 'x' | 'y' | 'none' = 'none';
  private ps: PerfectScrollbar;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.ps = new PerfectScrollbar(this.el.nativeElement);
  }

  scrollX(distance: number, smooth?: boolean) {
    this.el.nativeElement.scrollLeft = this.el.nativeElement.scrollLeft + distance
  }

  scrollY(distance: number, smooth?: boolean) {
    this.el.nativeElement.scrollTop = this.el.nativeElement.scrollTop + distance
  }

  scrollStart() {
    this.el.nativeElement.scrollLeft = 0
  }

  scrollEnd() {
    this.el.nativeElement.scrollLeft = this.el.nativeElement.scrollWidth
  }

  scrollTop() {
    this.el.nativeElement.scrollTop = 0
  }

  scrollBottom() {
    this.el.nativeElement.scrollTop = this.el.nativeElement.scrollHeight
  }

  ngOnDestroy() {
    this.ps.destroy()
  }
}
