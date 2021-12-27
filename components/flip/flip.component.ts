import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {InputBoolean} from "monsta-design/core";

@Component({
  selector: 'ns-flip',
  template: `
    <ng-container *ngIf="!nsShowBack;else flipBackTpl">
      <ng-container [ngTemplateOutlet]="nsFront"></ng-container>
    </ng-container>
    <ng-template #flipBackTpl>
      <ng-container [ngTemplateOutlet]="nsBack"></ng-container>
    </ng-template>
  `
})
export class NSFlipComponent {
  @Input() @InputBoolean() nsShowBack: boolean = false;
  @Input() nsFront: TemplateRef<any>;
  @Input() nsBack: TemplateRef<any>;
}
