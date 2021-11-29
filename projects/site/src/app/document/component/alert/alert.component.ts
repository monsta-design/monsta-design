import { Component, OnInit } from '@angular/core';

import doc from '!raw-loader!projects/lib/src/alert/readme.md';

import {NsDemoAlertBasicComponent} from 'projects/lib/src/alert/demo/basic.component';
import {Examples} from 'projects/site/src/app/common/document/document.component';

import basicDoc from '!raw-loader!projects/lib/src/alert/demo/basic.md';
import basicCode from '!raw-loader!projects/lib/src/alert/demo/basic.component';

import secondDoc from '!raw-loader!projects/lib/src/alert/demo/second.md';
import secondCode from '!raw-loader!projects/lib/src/alert/demo/second.component';
import {NsDemoAlertSecondComponent} from 'projects/lib/src/alert/demo/second.component';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  doc = doc;
  examples: Examples = {
    col: 2,
    children: [
      {
        doc: basicDoc,
        code: basicCode,
        component: NsDemoAlertBasicComponent,
      },
      {
        doc: secondDoc,
        code: secondCode,
        component: NsDemoAlertSecondComponent,
      },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
