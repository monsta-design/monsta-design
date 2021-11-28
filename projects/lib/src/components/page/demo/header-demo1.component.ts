import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'page-header-demo1',
  template: `
    <ns-page-header>
      Hi, Sean. <small>here's what's happening with your store today.</small>
    </ns-page-header>
  `,
  styleUrls: ['./header-demo1.component.css']
})
export class NSPageHeaderDemo1Component implements OnInit {

  constructor() {
  }


  ngOnInit(): void {
  }

}
