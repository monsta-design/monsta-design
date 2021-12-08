import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-header',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./layout.scss']
})
export class NSHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
