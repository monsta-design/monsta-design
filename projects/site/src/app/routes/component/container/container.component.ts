import { Component, OnInit } from '@angular/core';

import doc from '!raw-loader!projects/lib/src/components/container/readme.md';
import basicDoc from '!raw-loader!projects/lib/src/components/container/demo/basic.md';
import basicCode from '!raw-loader!projects/lib/src/components/grid/demo/basic.component';
import {Examples} from 'projects/site/src/app/common/document/document.component';
import {NSDemoContainerBasicComponent} from 'projects/lib/src/components/container/demo/basic.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  doc = doc;
  examples: Examples = {
    col: 1,
    children: [
      {
        doc: basicDoc,
        code: basicCode,
        component: NSDemoContainerBasicComponent,
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
