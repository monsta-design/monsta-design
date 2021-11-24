import {ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef, ViewEncapsulation} from "@angular/core";
import { InputBoolean } from "../../utils/convert";


@Component({
  selector: '[ns-sider-trigger]',
  exportAs: 'nsSiderTrigger',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngIf="isNormalTrigger">
      <ng-template [ngTemplateOutlet]="nzTrigger || defaultTrigger"></ng-template>
    </ng-container>
    <ng-template #defaultTrigger>
      <i *ngIf="!nsCollapsed" [ngClass]="!nsReverseArrow ? 'bi-chevron-left' : 'bi-chevron-right'"></i>
      <i *ngIf="nsCollapsed" [ngClass]="nsReverseArrow ? 'bi-chevron-left' : 'bi-chevron-right'"></i>
    </ng-template>
  `,
  host: {
    '[class.layout-sider-trigger]': 'isNormalTrigger',
    '[style.width]': 'siderWidth'
  }
})
export class NSSiderTriggerComponent implements OnInit {

  @Input() @InputBoolean() nsCollapsed: boolean = false;
  @Input() nzTrigger: TemplateRef<void> | undefined | null = undefined;
  @Input() nsCollapsedWidth: number | null = null;
  @Input() siderWidth: string | null = null;
  @Input() @InputBoolean() nsReverseArrow:boolean = false;
  isZeroTrigger = false;
  isNormalTrigger = false;

  updateTriggerType(): void {
    this.isNormalTrigger = this.nsCollapsedWidth !== 0;
  }
  ngOnInit():void {
    this.updateTriggerType()
  }
}
