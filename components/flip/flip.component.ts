import {
  Component, ElementRef, EventEmitter, HostBinding, HostListener,
  Input, OnDestroy, Output,
  TemplateRef, ViewChild,
} from '@angular/core';

@Component({
  selector: 'ns-flip',
  template: `
    <ng-container *ngIf="!showBack;else flipBackTpl">
      <ng-content></ng-content>
    </ng-container>
    <ng-template #flipBackTpl>
      <ng-container #container [ngTemplateOutlet]="nsBack"></ng-container>
    </ng-template>
  `,
})
export class NSFlipComponent implements OnDestroy {
  showBack = false;
  @Input() nsBack: TemplateRef<any>;
  @Input() nsBlurSelector: string;
  @Input() nsBlurCallback: (data) => boolean;
  @Input() nsTabindex: number = -1;
  @Input() nsData: any;
  @Output() nsOnRecover: EventEmitter<void> = new EventEmitter<void>()

  @HostBinding('class') get getClass() {
    if (this.showBack) {
      return 'active'
    }
    return null
  }

  @Input() set nsTrigger(val: Element) {
    if (val) {
      this._nsTrigger = val
      this._nsTrigger.addEventListener('click', this.triggerClickHandler)
    }
  };

  private _nsTrigger;

  constructor(private el: ElementRef) {
  }

  @HostListener('click') onClick() {
    if (!this.showBack && !this._nsTrigger) {
      this.showBack = true
    }
  }

  @HostListener('blur') onBlur() {
    if (this.nsBlurSelector) {
      return
    }
    if (this.nsBlurCallback && !this.nsBlurCallback(this.nsData)) {
      return;
    }
    this.showBack = false
    this.nsOnRecover.emit()
  }

  @HostBinding('tabindex') get getTabindex() {
    return this.nsTabindex
  }

  private elem;

  @ViewChild('container') set userContent(element) {
    if (element && this.nsBlurSelector) {
      this.elem = this.el.nativeElement.querySelector(this.nsBlurSelector);
      if (!this.elem) {
        throw new Error(`not found element by nsBlurSelector: ${this.nsBlurSelector}`)
      }
      this.elem.focus()
      this.elem.addEventListener('blur', this.blurListener)
    }
  }

  private triggerClickHandler = () => {
    this.showBack = true
  }

  private blurListener = () => {
    if (this.nsBlurCallback && !this.nsBlurCallback(this.nsData)) {
      return;
    }
    this.elem.removeEventListener('blur', this.blurListener)
    this.elem = null
    this.showBack = false;
    this.nsOnRecover.emit();
  }

  ngOnDestroy(): void {
    if (this._nsTrigger) {
      this._nsTrigger.removeEventListener('click', this.triggerClickHandler)
    }
  }
}
