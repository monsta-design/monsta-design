import {AfterViewInit, Component, ElementRef, Input, OnDestroy} from '@angular/core';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

Scrollbar.use(OverscrollPlugin)

@Component({
  selector: 'ns-scroller',
  template: '<ng-content></ng-content>',
  styleUrls: ['./scroller.component.scss']
})
export class NSScrollerComponent implements AfterViewInit, OnDestroy {

  @Input() nsDirection: 'x' | 'y' | 'none' = 'none';
  private ps: Scrollbar;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.ps = Scrollbar.init(this.el.nativeElement, {
      plugins: {
        overscroll: {
          effect: 'glow',
          damping: 0.2,
          maxOverscroll: 150,
          glowColor: '#222a2d',
        }
      }
    })
  }

  scrollX(distance: number, smooth?: boolean) {
    this.ps.scrollTo(this.ps.scrollLeft + distance, this.ps.scrollTop, 500)
  }

  scrollY(distance: number, smooth?: boolean) {
    this.ps.scrollTo(this.ps.scrollLeft, this.ps.scrollTop + distance, 500)
  }

  scrollStart() {
    this.ps.scrollTo(0, this.ps.scrollTop, 500)
  }

  scrollEnd() {
    this.ps.scrollTo(this.el.nativeElement.scrollWidth, this.ps.scrollTop, 500)
  }

  scrollTop() {
    this.ps.scrollTo(this.ps.scrollLeft, 0, 500)
  }

  scrollBottom() {
    this.ps.scrollTo(this.ps.scrollLeft, this.el.nativeElement.scrollHeight, 500)
  }

  ngOnDestroy() {
    this.ps.destroy()
  }
}
