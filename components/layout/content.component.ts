import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-content',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./layout.scss']
})
export class NSContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
