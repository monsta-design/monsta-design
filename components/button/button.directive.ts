import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input, OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import {Color} from "../types";


@Directive({
  selector: '[_button]'
})
export class BtnDirective implements AfterViewInit, OnChanges {

  @Input() _button: Color = 'primary';
  @Input() _button_size: 'sm' | 'md' | 'lg';
  @Input() _button_outline: boolean | 'false' | 'true' = null;
  @Input() _button_loading: boolean | 'false' | 'true' = null;
  @HostBinding('disabled') _disabled;

  private loadingSpan = null;

  @HostBinding('class') get getClass(): string {
    let classes = ['bs-btn']
    if (this._button) {
      if (this._button_outline) {
        classes.push(`bs-btn-outline-${this._button}`)
      } else {
        classes.push(`bs-btn-${this._button}`)
      }
    }
    if (this._button_size) {
      classes.push(`bs-btn-${this._button_size}`)
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
    if (this._button_loading !== null) {
      this.el.nativeElement.classList.add('bs-shadow-none')
      this.toggleLoading()
    }
  }

  toggleLoading() {
    if (this._button_loading === true || this._button_loading === 'true') {
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

export const ButtonDirectives = [
  BtnDirective
]
