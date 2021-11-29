import {Component, ElementRef, HostBinding, Input, OnInit} from '@angular/core';
import {NS_COLOR} from 'projects/lib/src/types';

@Component({
  selector: 'ns-alert',
  template: `<div class="bs-alert bs-alert-primary"><ng-content></ng-content></div>`,
  styleUrls: ['./alert.component.scss']
})
export class NSAlertComponent implements OnInit {

  @Input('type') nsType: NS_COLOR = 'primary';
  @HostBinding() class = 'bs-alert';
  @HostBinding() role = 'alert';

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.classList.add(`bs-alert-${this.nsType}`);
  }

}
