import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';
import {NS_SIZE} from 'projects/lib/src/types';

@Directive({
  selector: '[ns-col]'
})
export class NSColDirective implements AfterViewInit {

  @Input() nsSpan: string | number | null = null;
  @Input() nsOrder: string | number | null = null;
  @Input() nsSize: NS_SIZE | null = null;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    let col = 'col';
    if (this.nsSize) {
      col += '-' + this.nsSize;
    }

    if (this.nsSpan) {
      col += '-' + this.nsSpan;
    }
    this.el.nativeElement.classList.add(col);

    if (this.nsOrder) {
      this.el.nativeElement.classList.add('order-' + this.nsOrder);
    }
  }
}
