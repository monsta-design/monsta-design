import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'ns-menu',
  template: `
    <ng-content></ng-content>`,
  styleUrls: ['./menu.component.scss']
})
export class NSMenuComponent implements OnInit {


  constructor(
    private elem: ElementRef,
  ) {
  }

  ngOnInit() {
  }

}
