import { Component, OnInit } from '@angular/core';

import doc from '!raw-loader!projects/lib/src/components/card/readme.md';
import basicDoc from '!raw-loader!projects/lib/src/components/card/demo/basic.md';
import basicCode from '!raw-loader!projects/lib/src/components/card/demo/basic.component';
import {Examples} from 'projects/site/src/app/common/document/document.component';
import {NSDemoCardBasicComponent} from 'projects/lib/src/components/card/demo/basic.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  doc = doc;
  examples: Examples = {
    col: 2,
    children: [
      {
        doc: basicDoc,
        code: basicCode,
        component: NSDemoCardBasicComponent,
      },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
