import {ChangeDetectionStrategy, Component, ElementRef, Renderer2, ViewEncapsulation} from "@angular/core";


@Component({
  selector: 'ns-content',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content></ng-content>
  `,
})
export class NSContentComponent {

  constructor(public elementRef: ElementRef, private render: Renderer2) {
    this.render.addClass(this.elementRef.nativeElement, "layout-content")
  }
}
