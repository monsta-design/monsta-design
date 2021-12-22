import {AfterViewInit, Component, ElementRef, HostListener, Input, OnDestroy} from '@angular/core';
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
  private leaveTimeStamp: number = undefined;

  constructor(private el: ElementRef) {
  }

  preventScroll = (e) => {
    if (this.leaveTimeStamp !== undefined) {
      const now = Date.now();
      if (now - this.leaveTimeStamp < 50) {
        this.leaveTimeStamp = now
        e.preventDefault()
      } else {
        this.leaveTimeStamp = undefined
      }
    }
  }

  @HostListener('mouseleave', ['$event']) mousewheel(e) {
    this.leaveTimeStamp = Date.now();
  }

  ngAfterViewInit(): void {
    window.addEventListener('wheel', this.preventScroll, {passive: false})
    this.ps = Scrollbar.init(this.el.nativeElement, {
      damping: 0.3,
      continuousScrolling: false,
      plugins: {
        overscroll: {
          effect: 'glow',
          damping: 0.3,
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
    window.removeEventListener('wheel', this.preventScroll)
    this.ps.destroy()
  }
}
