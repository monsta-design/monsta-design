import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {NS_COLOR} from 'projects/lib/src/types';

@Directive({
  selector: '[ns-button]'
})
export class NSButtonDirective implements OnInit {

  @Input() nsType: NS_COLOR | null = 'light';

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.classList.add('ns-btn');
    if (this.nsType) {
      this.el.nativeElement.classList.add('ns-btn-' + this.nsType);
    }
  }

}
