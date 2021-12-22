import {AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
// import {SimplebarAngularComponent} from "simplebar-angular";
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'ns-scroller',
  template: `
    <!--    <div #view class="ns-scroll-view">-->
    <!--      <div #content class="ns-scroll-content">-->

    <!--      </div>-->
    <!--    </div>-->
    <!--    <ngx-simplebar #simplebar>-->
    <ng-content></ng-content>
    <!--    </ngx-simplebar>-->
    <!--    <div #xContainer class="ns-scroll-bar">-->
    <!--      <span #xBar cdkDragLockAxis="x" cdkDrag cdkDragBoundary=".ns-scroll-bar" (cdkDragMoved)="xDrag($event)"-->
    <!--            class="ns-scroll-bar-x"></span>-->
    <!--    </div>-->
  `,
  styleUrls: ['./scroller.component.scss']
})
export class NSScrollerComponent implements OnInit, AfterViewInit {

  @Input() nsBar: 'x' | 'y' | 'both' | 'none' = 'both';
  @ViewChild('view') private view: ElementRef;
  // @ViewChild('simplebar') private simplebar: SimplebarAngularComponent;
  @ViewChild('content') private content: ElementRef;
  @ViewChild('xContainer') private xContainer: ElementRef;
  @ViewChild('xBar') private xBar: ElementRef;
  private scrollWidth: number;
  private ps: PerfectScrollbar;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    // this.scrollWidth = this.el.nativeElement.scrollWidth;
    // let s = new ScrollBooster({
    //   viewport: this.view.nativeElement,
    //   content: this.content.nativeElement,
    //   scrollMode: 'transform', // use CSS 'transform' property
    //   direction: 'horizontal', // allow only horizontal scrolling
    //   emulateScroll: true, // scroll on wheel events
    // });
    // console.log(s)
    // console.log(this.simplebar)
    this.ps = new PerfectScrollbar(this.el.nativeElement);
  }

  ngOnInit(): void {

  }

  // @HostListener('mousewheel', ['$event']) mousemove(e) {
  //   e.preventDefault()
  //   if (e.wheelDeltaX != 0) {
  //     this.scrollX(-e.wheelDeltaX)
  //   } else if (e.wheelDeltaY != 0) {
  //     this.scrollY(-e.wheelDeltaY)
  //   }
  // }
  //
  //
  scrollX(distance: number, smooth?: boolean) {
    // this._scrollX(distance, smooth)
    // this.scrollXBar(distance)
    this.el.nativeElement.scrollLeft = this.el.nativeElement.scrollLeft + distance
  }

  //
  // private _scrollX(distance, smooth?: boolean) {
  //   distance = parseInt(this.el.nativeElement.scrollLeft) + parseInt(distance)
  //   if (smooth) {
  //     this.el.nativeElement.scrollTo({
  //       left: distance,
  //       behavior: 'smooth'
  //     })
  //   } else {
  //     this.el.nativeElement.scrollTo({
  //       left: distance,
  //     })
  //   }
  // }
  //
  // private scrollXBar(distance) {
  //   if (this.nsBar != 'none' && this.xBar) {
  //     let offset = this.calcBarViewOffset(
  //       this.el.nativeElement.scrollWidth,
  //       distance,
  //       this.el.nativeElement.offsetWidth,
  //       this.xBar.nativeElement.offsetWidth,
  //     )
  //     if (offset < 0) {
  //       offset = 0
  //     } else if (offset > this.xContainer.nativeElement.offsetWidth) {
  //       offset = this.xContainer.nativeElement.offsetWidth
  //     }
  //     console.log(`translate3d(${offset}px, 0px, 0px)`)
  //     this.xBar.nativeElement.style.transform = `translate3d(${offset}px, 0px, 0px)`
  //   }
  // }
  //
  // calcBarViewOffset(scrollWidth, scrollOffset, viewWidth, barSize) {
  //   return viewWidth * (scrollOffset) / scrollWidth
  // }
  //
  //
  scrollStart() {
    // this.el.nativeElement.scrollTo({
    //   left: 0,
    //   behavior: 'smooth'
    // })
    // this.scrollXBar(0)
    // this.ps.
    this.el.nativeElement.scrollLeft = 0
  }

  //
  scrollEnd() {
    // this.el.nativeElement.scrollTo({
    //   left: this.el.nativeElement.scrollWidth,
    //   behavior: 'smooth'
    // })
    // this.scrollXBar(this.xContainer.nativeElement.offsetWidth)
    this.el.nativeElement.scrollLeft = this.el.nativeElement.scrollWidth
  }

  //
  // scrollTop() {
  //   this.el.nativeElement.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   })
  // }
  //
  // scrollBottom() {
  //   this.el.nativeElement.scrollTo({
  //     top: this.el.nativeElement.scrollHeight,
  //     behavior: 'smooth'
  //   })
  // }
  //
  //
  // scrollY(distance, smooth?: boolean) {
  //   distance = parseInt(this.el.nativeElement.scrollTop) + parseInt(distance)
  //   if (smooth) {
  //     this.el.nativeElement.scrollTo({
  //       top: distance,
  //       behavior: 'smooth'
  //     })
  //   } else {
  //     this.el.nativeElement.scrollTo({
  //       top: distance,
  //     })
  //   }
  // }
  //
  //
  // xDrag($event) {
  //   console.log($event)
  //   let x = parseInt(this.xBar.nativeElement.style.transform.substr(11).match(/[0-9]+/))
  //   if ($event.distance.x > 0) {
  //     x = x + this.xBar.nativeElement.offsetWidth
  //   }
  //   this.el.nativeElement.scrollTo({
  //     left: x / this.xContainer.nativeElement.offsetWidth * this.scrollWidth,
  //   })
  // }
}
