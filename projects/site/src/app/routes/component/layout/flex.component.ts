import {Component, OnInit} from '@angular/core';
import doc from '!raw-loader!projects/site/src/app/routes/component/layout/flex/readme.md';
import {FlexDirectionColumnComponent} from './flex/flex-direction-column.component';
import {FlexDirectionColumnReverseComponent} from './flex/flex-direction-column-reverse.component';
import {FlexDirectionRowComponent} from './flex/flex-direction-row.component';
import flexDirectionRowComponentDoc from '!raw-loader!./flex/flex-direction-row.md';
import flexDirectionRowReverseComponentDoc from '!raw-loader!./flex/flex-direction-row-reverse.md';
import flexDirectionRowReverseComponentCode from '!raw-loader!./flex/flex-direction-row-reverse.component.ts';
import flexDirectionColumnComponentDoc from '!raw-loader!./flex/flex-direction-column.md';
import flexDirectionColumnComponentCode from '!raw-loader!./flex/flex-direction-column.component.ts';
import flexDirectionColumnReverseComponentDoc from '!raw-loader!./flex/flex-direction-column-reverse.md';
import flexDirectionColumnReverseComponentCode from '!raw-loader!./flex/flex-direction-column-reverse.component.ts';
import flexDirectionRowComponentCode from '!raw-loader!./flex/flex-direction-row.component.ts';
import {FlexDirectionRowReverseComponent} from './flex/flex-direction-row-reverse.component';

import {Examples} from 'projects/site/src/app/common/document/document.component';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.scss']
})
export class FlexComponent implements OnInit {

  doc = doc;
  examples: Examples = {
    col: 2,
    children: [
      {
        doc: flexDirectionRowComponentDoc,
        code: flexDirectionRowComponentCode,
        component: FlexDirectionRowComponent
      },
      {
        doc: flexDirectionRowReverseComponentDoc,
        code: flexDirectionRowReverseComponentCode,
        component: FlexDirectionRowReverseComponent
      },
      {
        doc: flexDirectionColumnComponentDoc,
        code: flexDirectionColumnComponentCode,
        component: FlexDirectionColumnComponent
      },
      {
        doc: flexDirectionColumnReverseComponentDoc,
        code: flexDirectionColumnReverseComponentDoc,
        component: FlexDirectionColumnReverseComponent
      },
    ]
  };

  constructor() {
  }

  ngOnInit(): void {
    console.log(doc);
  }

}
