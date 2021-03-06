import {
  Component, ElementRef, EventEmitter, HostBinding, HostListener,
  Input, OnDestroy, Output,
  TemplateRef, ViewChild,
} from '@angular/core';
import {InputBoolean} from "monsta-design/core";

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
  private elem;
  @Input() nsDisabled: boolean = false;
  @Input() nsBack: TemplateRef<any>;
  @Input() nsRecoverTrigger: 'click' | 'blur' = 'blur'; // TODO 定义恢复触发事件
  @Input() nsBlurSelector: string;
  @Input() nsBlurCallback: ((escape: boolean, data: any) => boolean) | ((escape: boolean, data: any) => Promise<boolean>); // TODO 判断同步调用
  @Input() @InputBoolean() nsKeyup: boolean = true;
  @Input() nsTabindex: number = -1;
  @Input() nsData: any;
  @Input() nsFocusCallback: (data: any) => void
  @Input() nsStopPropagation = true;
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

  @HostListener('click', ['$event']) onClick(event) {
    if (this.nsStopPropagation) {
      event.stopPropagation()
    }
    if (!this.nsDisabled && !this.showBack && !this._nsTrigger) {
      this.showBack = true
      this.triggerClick()
    }
  }

  // TODO 优化 Check 回调返回 boolean 结果提示
  private triggerClick() {
    if (this.nsFocusCallback) {
      this.nsFocusCallback(this.nsData)
    }
  }

  @HostListener('blur') onBlur() {
    if (this.nsBlurSelector) {
      return
    }
    if (this.nsBlurCallback && !this.nsBlurCallback(false, this.nsData)) {
      return;
    }
    this.showBack = false
    this.nsOnRecover.emit()
  }

  @HostBinding('tabindex') get getTabindex() {
    return this.nsTabindex
  }

  @ViewChild('container') set container(element) {
    if (element && this.nsBlurSelector) {
      this.elem = this.el.nativeElement.querySelector(this.nsBlurSelector);
      if (!this.elem) {
        throw new Error(`not found element by nsBlurSelector: ${this.nsBlurSelector}`)
      }
      this.elem.focus()
      this.elem.addEventListener('blur', this.blurListener)
      if (this.nsKeyup) {
        this.elem.addEventListener('keyup', this.elemKeyupHandler)
      }
    }
  }

  private triggerClickHandler = (event) => {
    if (this.nsStopPropagation) {
      event.stopPropagation()
    }
    if (!this.nsDisabled && !this.showBack) {
      this.showBack = true
      this.triggerClick()
    }
  }

  private elemKeyupHandler = (event) => {
    switch (event.code) {
      case 'Enter':
        this.recover(false).then()
        break;
      case 'Escape':
        this.recover(true).then()
        break;
    }
  }

  private execBlurCallback(escape: boolean, data: any): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      let v: any = this.nsBlurCallback(escape, data)
      if (typeof v.then === 'function') {
        v.then(vv => {
          resolve(vv)
        })
      } else {
        resolve(v)
      }
    })
  }

  async recover(escape: boolean) {
    if (this.nsBlurCallback && !await this.execBlurCallback(escape, this.nsData)) {
      return;
    }
    if (this.elem) {
      this.elem.removeEventListener('blur', this.blurListener)
      if (this.nsKeyup) {
        this.elem.removeEventListener('keyup', this.elemKeyupHandler)
      }
      this.elem = null
    }
    this.showBack = false;
    this.nsOnRecover.emit();
  }

  private blurListener = () => {
    this.recover(false).then()
  }

  ngOnDestroy(): void {
    if (this._nsTrigger) {
      this._nsTrigger.removeEventListener('click', this.triggerClickHandler)
    }
  }
}
