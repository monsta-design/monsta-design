import { Component, OnInit } from '@angular/core';

import doc from '!raw-loader!projects/lib/src/components/menu/readme.md';
import basicDoc from '!raw-loader!projects/lib/src/components/menu/demo/basic.md';
import basicCode from '!raw-loader!projects/lib/src/components/menu/demo/basic.component';
import {NSDemoMenuBasicComponent} from 'projects/lib/src/components/menu/demo/basic.component';
import {Examples} from 'projects/site/src/app/common/document/document.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class LayoutComponent implements OnInit {

  doc = doc;
  examples: Examples = {
    col: 1,
    children: [
      {
        doc: basicDoc,
        code: basicCode,
        component: NSDemoMenuBasicComponent,
      },
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
