import {ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef} from "@angular/core";
import { InputBoolean, toCssPixel } from '../../utils/convert';


@Component({
  selector: 'ns-sider',
  template: `
    <div class="layout-sider-children">
      <ng-content></ng-content>
    </div>
    <div
      *ngIf="nsCollapsible && nsTrigger !== null"
      ns-sider-trigger
      [nsCollapsed]="nsCollapsed"
      [nsCollapsedWidth]="nsCollapsedWidth"
      [nsReverseArrow]="nsReverseArrow"
      [nsTrigger]="nsTrigger"
      [siderWidth]="widthSetting"
      (click)="setCollapsed(!nsCollapsed)"
    >
    </div>
  `,
  host: {
    '[class.layout-sider-light]': `nsTheme === 'light'`,
    '[class.layout-sider-dark]': `nsTheme === 'dark'`,
    '[style.width]': 'widthSetting',
    '[style.maxWidth]': 'widthSetting',
    '[style.minWidth]': 'widthSetting',
    '[style.flex]': 'flexSetting',
  }
})
export class NSSiderComponent implements OnInit {

  @Output() readonly nsCollapsedChange = new EventEmitter();
  @Input() nsWidth: string | number = 200;
  @Input() nsCollapsedWidth: string | number = 80;
  @Input() nsTheme: 'light' | 'dark' = 'dark';
  @Input() nsTrigger: TemplateRef<void> | undefined | null = undefined;
  @Input() @InputBoolean() nsCollapsible: boolean = false;
  @Input() @InputBoolean() nsCollapsed: boolean = false;
  @Input() @InputBoolean() nsReverseArrow: boolean = false;

  widthSetting: string | null = null;
  flexSetting: string | null = null;


  updateStyleMap(): void {
    this.widthSetting = this.nsCollapsed ? toCssPixel(this.nsCollapsedWidth) : toCssPixel(this.nsWidth);
    this.flexSetting = `0 0 ${this.widthSetting}`;
  }
  constructor(
    private cdr: ChangeDetectorRef,
    private elementRef: ElementRef
    ) {
    this.elementRef.nativeElement.classList.add('layout-sider')
  }
  ngOnInit():void {
    this.updateStyleMap()
  }

  setCollapsed(collapsed: boolean): void {
    if (collapsed !== this.nsCollapsed) {
      this.nsCollapsed = collapsed;
      this.nsCollapsedChange.emit(collapsed)
      this.updateStyleMap()
      this.cdr.markForCheck()
    }
  }
}
