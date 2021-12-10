import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  Input, OnChanges,
  SimpleChanges
} from '@angular/core';
import {Color} from "../types";


@Directive({
  selector: '[nsButton]'
})
export class BtnDirective implements AfterViewInit, OnChanges {

  @Input() nsButton: Color = 'primary';
  @Input() nsButton_size: 'sm' | 'md' | 'lg';
  @Input() nsButton_outline: boolean | 'false' | 'true' = null;
  @Input() nsButton_loading: boolean | 'false' | 'true' = null;
  @HostBinding('disabled') _disabled;

  private loadingSpan = null;

  @HostBinding('class') get getClass(): string {
    let classes = ['bs-btn']
    if (this.nsButton) {
      if (this.nsButton_outline) {
        classes.push(`bs-btn-outline-${this.nsButton}`)
      } else {
        classes.push(`bs-btn-${this.nsButton}`)
      }
    }
    if (this.nsButton_size) {
      classes.push(`bs-btn-${this.nsButton_size}`)
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
    if (this.nsButton_loading !== null) {
      this.el.nativeElement.classList.add('bs-shadow-none')
      this.toggleLoading()
    }
  }

  toggleLoading() {
    if (this.nsButton_loading === true || this.nsButton_loading === 'true') {
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
