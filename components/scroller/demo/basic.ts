import {AfterContentInit, AfterViewInit, Component, ContentChild, ViewChild,} from '@angular/core';
// @ts-ignore
import {NSScrollerComponent} from "@components/scroller";

@Component({
  selector: 'ns-demo-scroller-basic',
  template: `
    <button (click)="scrollTo(-200)">向左滑动200px</button>
    <button (click)="scrollTo(200)">向右滑动200px</button>
    <button (click)="scrollStart()">最左</button>
    <button (click)="scrollEnd()">最右</button>
    <ns-scroller>
      <div *ngFor="let item of items;let i = index">
        {{i}}
      </div>
    </ns-scroller>
  `,
  styles: [`
    ns-scroller {
      /*width: 100%;*/
      /*height: 100px;*/
      background: #d3d3d3;
      /*border: 1px solid #333;*/
    }

    /*div {*/
    /*  display: flex;*/
    /*}*/

    div {
      width: 100px;
      height: 80px;
      background: #657eae;
      margin-right: 10px;
      /*flex-shrink: 0;*/
    }
  `]
})
export class NSDemoScrollerBasicComponent implements AfterViewInit {
  @ViewChild(NSScrollerComponent) scroller: NSScrollerComponent;

  items = new Array(100)

  ngAfterViewInit() {
    console.log(this.scroller)
  }

  scrollTo(d: number) {
    this.scroller.scrollX(d, true)
  }

  scrollStart() {
    this.scroller.scrollStart()
  }

  scrollEnd() {
    this.scroller.scrollEnd()
  }
}
