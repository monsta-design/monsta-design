import {Component, OnInit} from '@angular/core';

// import doc from '!raw-loader!lib/src/input/readme.md';
// import basicDoc from '!raw-loader!lib/src/input/demo/basic.md';
// import basicCode from '!raw-loader!lib/src/input/demo/basic.component';
// import {NsDemoInputBasicComponent} from 'lib/src/input/demo/basic.component';
// import {Examples} from 'src/site/src/app/common/document/document.component';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  //
  // doc = doc;
  // examples: Examples = {
  //   col: 2,
  //   children: [
  //     {
  //       doc: basicDoc,
  //       code: basicCode,
  //       component: NsDemoInputBasicComponent,
  //     },
  //     {
  //       doc: basicDoc,
  //       code: basicCode,
  //       component: NsDemoInputBasicComponent,
  //     },
  //     {
  //       doc: basicDoc,
  //       code: basicCode,
  //       component: NsDemoInputBasicComponent,
  //     },
  //     {
  //       doc: basicDoc,
  //       code: basicCode,
  //       component: NsDemoInputBasicComponent,
  //     },
  //   ]
  // };

  constructor() {

  }

  ngOnInit(): void {
  }

}
