import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {InputBoolean} from "monsta-design/core";
import {coerceCssPixelValue} from "@angular/cdk/coercion";


@Component({
  selector: 'ns-drawer',
  template: `
    <div class="ns-drawer-mask" (click)="close()"></div>
    <div class="ns-drawer-content">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./drawer.scss']
})
export class NSDrawerComponent implements OnInit, OnChanges {

  @Input() @InputBoolean() nsFloat: boolean = true;
  @Input() @InputBoolean() nsVisible: boolean = false;

  @Input() nsMode: 'float' | 'embed' = 'float';

  @Input()
  set nsWidth(val: number | string) {
    this._nsWidth = coerceCssPixelValue(val)
  };

  get nsWidth() {
    return this._nsWidth;
  }

  @Input()
  set nsHeight(val: number | string) {
    this._nsHeight = coerceCssPixelValue(val)
  };

  get nsHeight() {
    return this._nsHeight;
  }

  @Output() nsOnClose: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding('class.ns-open') get getOpen() {
    return this.nsVisible
  }

  private _nsWidth: string = '256px';
  private _nsHeight: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    // console.log(this.el.)
  }

  ngOnChanges(changes: SimpleChanges): void {
    const {nsVisible} = changes;
    if (nsVisible) {
      if (nsVisible.currentValue) {
        // this.el.nativeElement.style.transform = 'translateX(0)'
      } else {
        // this.el.nativeElement.style.transform = 'translateX(100%)'
      }
    }
  }

  open() {

  }

  private _show() {

  }

  private _openOverlay() {

  }

  close() {
    this.nsVisible = false;
    this.nsOnClose.emit(null);
  }
}
