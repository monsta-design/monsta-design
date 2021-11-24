import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';
import {NS_SIZE} from 'projects/lib/src/types';


@Directive({
  selector: '[ns-container]'
})
export class ContainerDirective implements AfterViewInit {

  @Input() nsSize: NS_SIZE | null = null;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    let name = 'container';
    if (this.nsSize) {
      name += `-${this.nsSize}`;
    }
    this.el.nativeElement.classList.add(name);
  }

}
