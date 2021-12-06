import {Component, Host, HostBinding, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ns-button',
  // template: `
  //   <button class="bs-btn" [ngClass]="classes">
  //     <ng-content></ng-content>
  //   </button>`,
  template: `
    <ng-content></ng-content>`,
  styleUrls: ['./button.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NSButtonComponent implements OnInit {

  @Input('type') _type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
  @Input('size') _size: 'sm' | 'md' | 'lg';
  @Input('outline') _outline: boolean | 'false' | 'true';
  @HostBinding('class') class: string;
  ngOnInit() {
    this.class = this.makeClass()
  }
  private makeClass(): string {
    let classes = ['bs-btn']
    if (this._type) {
      if (this._outline) {
        classes.push(`bs-btn-outline-${this._type}`)
      } else {
        classes.push(`bs-btn-${this._type}`)
      }
    }
    if (this._size) {
      classes.push(`bs-btn-${this._size}`)
    }
    return classes.join(' ')
  }
}
