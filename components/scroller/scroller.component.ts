import {AfterViewInit, Component, ElementRef, OnDestroy} from '@angular/core';
// import Scrollbar from 'smooth-scrollbar';
// import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
// Scrollbar.use(OverscrollPlugin)

@Component({
  selector: 'ns-scroller',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./scroller.component.scss']
})
export class NSScrollerComponent implements AfterViewInit, OnDestroy {

  // @Input() nsDirection: 'x' | 'y' | 'none' = 'none';
  // @Input() nsShowTracks: 'always' | 'auto' = 'auto';
  // @ViewChild('el') el: ElementRef;
  // private ps: Scrollbar;
  // private leaveTimeStamp: number = 0;
  // private windowTimeStamp: number = 0;
  // private scrollDuration: number = 50;
  // showMask = false
  //
  // @HostListener('mousewheel', ['$event']) mousewheel(e) {
  //   e.stopPropagation()
  //   return true
  // }

  // checkScrolling(): boolean {
  //   return Date.now() - this.windowTimeStamp < this.scrollDuration
  // }
  //
  // preventScroll = (e) => {
  //   const now = Date.now();
  //   this.windowTimeStamp = now;
  //   if (now - this.leaveTimeStamp < this.scrollDuration) {
  //     this.leaveTimeStamp = now
  //     e.preventDefault()
  //   }
  // }
  //
  // @HostListener('mouseenter') mouseenter() {
  //   if (this.checkScrolling()) {
  //     this.showMask = true
  //     const t = setInterval(() => {
  //       console.log('屏幕正在滚动...')
  //       if (!this.checkScrolling()) {
  //         this.showMask = false
  //         clearInterval(t)
  //       }
  //     }, 5)
  //   } else {
  //     this.showMask = false
  //   }
  // }
  //
  // @HostListener('mouseleave') mousewheel() {
  //   this.leaveTimeStamp = Date.now();
  // }
  //
  ngAfterViewInit(): void {
    // window.addEventListener('wheel', this.preventScroll, {passive: false})
    // this.initScroll()
  }

  //
  // initScroll() {
  //   if (this.ps) {
  //     return
  //   }
  //   this.ps = Scrollbar.init(this.el.nativeElement, {
  //     damping: 1,
  //     continuousScrolling: false,
  //     thumbMinSize: 100,
  //     // delegateTo: this.el.nativeElement,
  //     // alwaysShowTracks: true,
  //     plugins: {
  //       overscroll: {
  //         effect: 'glow',
  //         damping: 1,
  //         maxOverscroll: 100,
  //         glowColor: '#222a2d',
  //       }
  //     }
  //   })
  // }

  constructor(private el: ElementRef) {
  }

  scrollX(distance: number) {
    this.el.nativeElement.scrollTo({
      left: this.el.nativeElement.scrollLeft + distance
    })
    // this.ps.scrollTo(this.ps.scrollLeft + distance, this.ps.scrollTop, 500)
  }

  scrollY(distance: number) {
    this.el.nativeElement.scrollTo({
      top: this.el.nativeElement.scrollTop + distance
    })
    // this.ps.scrollTo(this.ps.scrollLeft, this.ps.scrollTop + distance, 500)
  }

  scrollStart() {
    // this.ps.scrollTo(0, this.ps.scrollTop, 500)
    this.el.nativeElement.scrollTo({
      left: 0,
      behavior: 'smooth'
    })
  }

  scrollEnd() {
    // this.ps.scrollTo(this.el.nativeElement.scrollWidth, this.ps.scrollTop, 500)
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
    // this.ps.scrollTo(this.ps.scrollLeft, this.el.nativeElement.scrollHeight, 500)
  }

  ngOnDestroy() {
    // window.removeEventListener('wheel', this.preventScroll)
    // this.ps.destroy()
  }
}
