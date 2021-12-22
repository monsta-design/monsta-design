import {AfterContentInit, AfterViewInit, Component, ContentChild, ViewChild,} from '@angular/core';
// @ts-ignore
import {NSScrollerComponent} from "@components/scroller";

@Component({
  selector: 'ns-demo-scroller-vertical',
  template: `
    <ns-button-group>
      <button nsButton="secondary" nsButtonSize="sm" nsButtonOutline="true" (click)="scrollTop()">最上</button>
      <button nsButton="secondary" nsButtonSize="sm" nsButtonOutline="true" (click)="scrollTo(-200)">向上滑动200px</button>
      <button nsButton="secondary" nsButtonSize="sm" nsButtonOutline="true" (click)="scrollTo(200)">向下滚动200px</button>
      <button nsButton="secondary" nsButtonSize="sm" nsButtonOutline="true" (click)="scrollBottom()">最下</button>
    </ns-button-group>
    <ns-scroller>
      <div *ngFor="let item of items;let i = index">
        {{i}}
      </div>
    </ns-scroller>
  `,
  styles: [`
    ns-scroller {
      background: #d3d3d3;
      height: 200px;
      margin-top: 20px;
    }

    div {
      width: 100%;
      height: 20px;
      background: #657eae;
      margin-bottom: 10px;
    }
  `]
})
export class NSDemoScrollerVerticalComponent implements AfterViewInit {
  @ViewChild(NSScrollerComponent) scroller: NSScrollerComponent;

  items = new Array(100)

  ngAfterViewInit() {
    console.log(this.scroller)
  }

  scrollTo(d: number) {
    this.scroller.scrollY(d)
  }

  scrollTop() {
    this.scroller.scrollTop()
  }

  scrollBottom() {
    this.scroller.scrollBottom()
  }
}
