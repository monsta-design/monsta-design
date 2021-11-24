import { Component, OnInit } from '@angular/core';

import doc from '!raw-loader!projects/lib/src/components/layout/readme.md';
import basicDoc from '!raw-loader!projects/lib/src/components/layout/demo/basic.md';
import basicCode from '!raw-loader!projects/lib/src/components/layout/demo/basic.component';
import {NSDemoLayoutBasicComponent} from 'projects/lib/src/components/layout/demo/basic.component';
import {Examples} from 'projects/site/src/app/common/document/document.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  doc = doc;
  examples: Examples = {
    col: 1,
    children: [
      {
        doc: basicDoc,
        code: basicCode,
        component: NSDemoLayoutBasicComponent,
      },
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
