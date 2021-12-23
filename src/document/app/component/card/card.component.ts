import {Component, OnInit} from '@angular/core';

// // @ts-ignore
// import doc from '!raw-loader!monsta-design/readme.md';
// // @ts-ignore
// import basicDoc from '!raw-loader!monsta-design/demo/basic.md';
// // @ts-ignore
// import basicCode from '!raw-loader!monsta-design/demo/basic.component';
// import {NSDemoCardBasicComponent} from 'monsta-design/card/demo/basic.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  // doc = doc;
  // examples = {
  //   col: 2,
  //   children: [
  //     {
  //       doc: basicDoc,
  //       code: basicCode,
  //       component: NSDemoCardBasicComponent,
  //     },
  //   ]
  // };

  constructor() {
  }

  ngOnInit(): void {
  }

}
