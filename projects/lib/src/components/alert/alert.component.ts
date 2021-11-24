import {Component, ElementRef, HostBinding, Input, OnInit} from '@angular/core';
import {NS_COLOR} from 'projects/lib/src/types';

@Component({
  selector: 'ns-alert',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./alert.component.scss']
})
export class NSAlertComponent implements OnInit {

  @Input() nsType: NS_COLOR = 'primary';
  @HostBinding() class = 'ns-alert';
  @HostBinding() role = 'alert';

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.classList.add(`ns-alert-${this.nsType}`);
  }

}
