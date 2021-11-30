import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-flex-item',
  template: `<ng-content></ng-content>`
})
export class FlexItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
