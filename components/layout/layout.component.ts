import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef, HostBinding,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'ns-layout',
  template: `
    <ng-content></ng-content>`,
  styles: [`
    :host {
      display: flex;
      width: 100%;
    }
  `]
})
export class NSLayoutComponent implements OnInit, AfterViewInit, AfterContentInit {


  constructor(private el: ElementRef) {
  }

  @HostBinding('style.flex-direction') direction = 'column';

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  ngAfterContentInit() {
    for (let elem of this.el.nativeElement.children) {
      switch (elem.tagName.toLowerCase()) {
        case 'ns-aside':
          this.direction = 'row'
          break
        case 'ns-footer':
          elem.style.setProperty('margin-top', 'auto')
          break
      }
    }
  }
}
