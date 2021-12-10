import {AfterViewInit, Component, ElementRef, HostBinding, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'ns-space',
  template: `
    <ng-content></ng-content>`,
  styles: [`
    :host {
      display: inline-flex;
    }

    :host ::ng-deep span {
      background: #9d9d9d;
      height: 0.9rem;
      width: 1px;
    }
  `]
})
export class NSSpaceComponent implements AfterViewInit {

  @Input() gutter: 'sm' | 'md' | 'lg' | number = 'sm';
  @Input() direction: 'row' | 'column' = 'row';
  @Input() align: 'start' | 'end' | 'baseline' | 'center';
  @Input() split: TemplateRef<any>;

  @HostBinding('style') get getStyle() {
    if (this.direction === 'column') {
      return {
        flexDirection: 'column',
      }
    }
    return {
      flexDirection: 'row',
      alignItems: 'center'
    }
  }

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    let children = [...this.el.nativeElement.children]
    for (let i = 0; i < children.length - 1; i++) {
      let span = document.createElement("span");
      this.el.nativeElement.insertBefore(span, children[i + 1])
    }
  }


}
