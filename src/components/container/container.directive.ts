import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';
// import {NS_SIZE} from 'src/types';


@Directive({
  selector: '[ns-container]'
})
export class ContainerDirective implements AfterViewInit {

  @Input() nsSize: string | null = null;

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
