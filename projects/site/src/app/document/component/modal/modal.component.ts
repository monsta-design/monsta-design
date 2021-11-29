import {Component, OnInit} from '@angular/core';

import doc from '!raw-loader!projects/lib/src/modal/readme.md';
import basicDoc from '!raw-loader!projects/lib/src/modal/demo/basic.md';
import basicCode from '!raw-loader!projects/lib/src/modal/demo/basic.component';
import {NsDemoModalBasicInputComponent} from 'projects/lib/src/modal/demo/basic.component';
import {Examples} from 'projects/site/src/app/common/document/document.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  doc = doc;
  examples: Examples = {
    col: 2,
    children: [
      {
        doc: basicDoc,
        code: basicCode,
        component: NsDemoModalBasicInputComponent,
      },
    ]
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
