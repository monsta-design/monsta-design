import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-aside',
  template: `
    <ng-content></ng-content>`,
  styles: [`
    :host {
      flex-shrink: 0;
      flex-grow: 0;
    }
  `]
})
export class NSAsideComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
