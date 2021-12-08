import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-footer',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./layout.scss']
})
export class NSFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
