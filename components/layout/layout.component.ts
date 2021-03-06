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
export class NSLayoutComponent implements AfterContentInit {
  constructor(private el: ElementRef) {
  }

  @HostBinding('style.flex-direction') direction = 'column';

  ngAfterContentInit() {
    for (let elem of this.el.nativeElement.children) {
      switch (elem.tagName.toLowerCase()) {
        case 'ns-layout-aside':
          this.direction = 'row'
          break
        case 'ns-layout-footer':
          elem.style.setProperty('margin-top', 'auto')
          break
      }
    }
  }
}
