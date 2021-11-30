import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ns-flex-box',
  template: `
    <ng-content></ng-content>`
})
export class FlexBoxComponent implements OnInit {

  @Input() direction: 'x' | 'y' = 'x';
  @Input() wrap: boolean | 'true' | 'false' | 'reverse';
  @Input() x: 'left' | 'right' | 'center' | 'between' | 'ground';
  @Input() y: 'top' | 'bottom' | 'center' | 'between' | 'ground';

  constructor() {
  }

  ngOnInit(): void {
  }

}
