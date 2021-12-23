import {Component, Input, OnInit} from '@angular/core';
import {InputBoolean} from "monsta-design/core";

@Component({
  selector: 'ns-loading',
  template: `
    <div *ngIf="nsActive" class="bs-spinner-border" role="status">
      <span class="bs-visually-hidden">Loading...</span>
    </div>
    <ng-content></ng-content>`,
  styleUrls: ['./loading.component.scss']
})
export class NSLoadingComponent {

  @Input() nsTip: string
  @Input() nsDelay: number
  @Input() @InputBoolean() nsActive: boolean = true

  constructor() {
  }


}
