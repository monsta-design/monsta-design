import {Component, OnInit} from '@angular/core';

import {Examples} from 'projects/site/src/app/common/document/document.component';
import doc from '!raw-loader!projects/lib/src/components/grid/readme.md';
import basicDoc from '!raw-loader!projects/lib/src/components/grid/demo/basic.md';
import basicCode from '!raw-loader!projects/lib/src/components/grid/demo/basic.component';
import {NSDemoGridBasicComponent} from 'projects/lib/src/components/grid/demo/basic.component';
import orderDoc from '!raw-loader!projects/lib/src/components/grid/demo/order.md';
import orderCode from '!raw-loader!projects/lib/src/components/grid/demo/order.component';
import {NSDemoGridOrderComponent} from 'projects/lib/src/components/grid/demo/order.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  doc = doc;
  examples: Examples = {
    col: 1,
    children: [
      {
        doc: basicDoc,
        code: basicCode,
        component: NSDemoGridBasicComponent,
      },
      {
        doc: orderDoc,
        code: orderCode,
        component: NSDemoGridOrderComponent,
      }
    ]
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
