import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-button-group',
  template: `<div class="bs-btn-group"><ng-content></ng-content></div>`,
  styleUrls: ['./button.scss']
})
export class NSButtonGroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
