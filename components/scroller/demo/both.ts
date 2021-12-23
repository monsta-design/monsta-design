import {AfterViewInit, Component, ViewChild,} from '@angular/core';
// @ts-ignore
import {NSScrollerComponent} from "monsta-design/scroller";

@Component({
  selector: 'ns-demo-scroller-both',
  template: `
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
      background: #d3d3d3;
      height: 200px;
    }

    div {
      width: 2000px;
      height: 400px;
    }

    span {
      width: 60px;
      height: 60px;
      background: #657eae;
      margin-right: 10px;
      margin-bottom: 10px;
      display: block;
      float: left;
    }
  `]
})
export class NSDemoScrollerBothComponent{
  items = new Array(100)
}
