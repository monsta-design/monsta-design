import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  Input, OnChanges,
  SimpleChanges
} from '@angular/core';
import {Color, isTrue, NS_BOOL} from "monsta-design/core";


@Directive({
  selector: '[nsButton]'
})
export class BtnDirective implements AfterViewInit, OnChanges {

  @Input() nsButton: Color = 'primary';
  @Input() nsButtonSize: 'sm' | 'md' | 'lg';
  @Input() nsButtonOutline: boolean | 'false' | 'true' = null;
  @Input() nsButtonLoading: boolean | 'false' | 'true' = null;
  @HostBinding('disabled') _disabled;

  private loadingSpan = null;

  @HostBinding('class') get getClass(): string {
    let classes = ['bs-btn']
    if (this.nsButton) {
      if (this.nsButtonOutline) {
        classes.push(`bs-btn-outline-${this.nsButton}`)
      } else {
        classes.push(`bs-btn-${this.nsButton}`)
      }
    }
    if (this.nsButtonSize) {
      classes.push(`bs-btn-${this.nsButtonSize}`)
    }
    return classes.join(' ')
  }

  constructor(private el: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (typeof changes.btn_loading !== 'undefined') {
      this.toggleLoading()
    }
  }


  ngAfterViewInit() {
    if (this.nsButtonLoading !== null) {
      this.el.nativeElement.classList.add('bs-shadow-none')
      this.toggleLoading()
    }
  }

  toggleLoading() {
    if (this.nsButtonLoading === true || this.nsButtonLoading === 'true') {
      if (this.loadingSpan === null) {
        this.loadingSpan = document.createElement('span')
        this.loadingSpan.classList.add('bs-spinner-border')
        this.loadingSpan.classList.add('bs-spinner-border-sm')
        this.loadingSpan.classList.add('bs-me-1')
      }
      if (!this.el.nativeElement.hasAttribute('disabled')) {
        this._disabled = true
      }
      if (this.el.nativeElement.childNodes.length > 0) {
        this.el.nativeElement.insertBefore(this.loadingSpan, this.el.nativeElement.childNodes[0])
      } else {
        this.el.nativeElement.appendChild(this.loadingSpan)
      }
    } else {
      if (this.loadingSpan !== null) {
        this._disabled = false
        this.el.nativeElement.removeChild(this.loadingSpan)
      }
    }
  }
}

@Directive({
  selector: '[nsCloseButton]'
})
export class CloseBtnDirective {
  @Input() nsWhite: NS_BOOL

  @HostBinding('class') get getClass() {
    let classes = ['bs-btn-close']
    if (isTrue(this.nsWhite)) {
      classes.push('bs-btn-close-white')
    }
    return classes.join(' ')
  }
}

export const ButtonDirectives = [
  BtnDirective,
  CloseBtnDirective
]
