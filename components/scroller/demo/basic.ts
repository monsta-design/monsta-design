import {AfterContentInit, AfterViewInit, Component, ContentChild, ViewChild,} from '@angular/core';
// @ts-ignore
import {NSScrollerComponent} from "@components/scroller";

@Component({
  selector: 'ns-demo-scroller-basic',
  template: `
    <ns-button-group>
      <button nsButton="secondary" nsButtonOutline="true" nsButtonSize="sm" (click)="scrollStart()">最左</button>
      <button nsButton="secondary" nsButtonOutline="true" nsButtonSize="sm" (click)="scrollTo(-200)">向左滑动200px</button>
      <button nsButton="secondary" nsButtonOutline="true" nsButtonSize="sm" (click)="scrollTo(200)">向右滑动200px</button>
      <button nsButton="secondary" nsButtonOutline="true" nsButtonSize="sm" (click)="scrollEnd()">最右</button>
    </ns-button-group>
    <ns-scroller>
      <div>
        <span *ngFor="let item of items;let i = index">
          {{i}}
        </span>
      </div>
    </ns-scroller>
  `,
  styles: [`
    ns-scroller {
      margin-top: 20px;
      background: #d3d3d3;
    }

    div {
      display: flex;
    }

    span {
      width: 100px;
      height: 80px;
      display: block;
      background: #657eae;
      margin-right: 10px;
      flex-shrink: 0;
    }
  `]
})
export class NSDemoScrollerBasicComponent {
  @ViewChild(NSScrollerComponent) scroller: NSScrollerComponent;

  items = new Array(100)

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
