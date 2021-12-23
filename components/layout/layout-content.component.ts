import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-layout-content',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./layout.scss']
})
export class NSLayoutContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
