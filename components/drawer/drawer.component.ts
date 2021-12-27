import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges, ViewChild
} from '@angular/core';
import {InputBoolean} from "monsta-design/core";
import anime from "animejs/lib/anime.es.js";


@Component({
  selector: 'ns-drawer',
  template: `
    <div class="ns-drawer-mask" (click)="close()" [style.display]="nsMask&&nsVisible?'block':'none'"></div>
    <div #contentRef class="ns-drawer-content" [style.width.px]="nsWidth">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./drawer.scss'],
  host: {}
})
export class NSDrawerComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() @InputBoolean() nsFloat: boolean = true;
  @Input() @InputBoolean() nsVisible: boolean = false;
  @Input() @InputBoolean() nsMask: boolean = false;
  @Input() nsDuration: number = 200;
  @Input() nsMode: 'float' | 'embed' = 'float';

  @Input()
  set nsWidth(val: number | string) {
    if (typeof val === "string") {
      this._nsWidth = parseInt(val, 10)
    }
  };

  get nsWidth() {
    return this._nsWidth;
  }

  @Input()
  set nsHeight(val: number | string) {
    if (typeof val === "string") {
      this._nsHeight = parseInt(val, 10)
    }
  };

  get nsHeight() {
    return this._nsHeight;
  }

  @Output() nsOnClose: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('contentRef') contentRef: ElementRef;
  // @HostBinding('class.ns-open') get getOpen() {
  //   return this.nsVisible
  // }

  private _nsWidth: number = 256;
  private _nsHeight: number;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    // this.contentRef.nativeElement.style.display = 'none';
    this.contentRef.nativeElement.style.transform = `translateX(${this._nsWidth + 'px'})`;
  }

  ngOnInit(): void {
    // console.log(this.el.)
  }

  ngOnChanges(changes: SimpleChanges): void {
    const {nsVisible} = changes;
    if (nsVisible) {
      if (nsVisible.currentValue) {
        // this.el.nativeElement.style.transform = 'translateX(0)'
        this.open()
      } else {
        // this.el.nativeElement.style.transform = 'translateX(100%)'
        this.close()
      }
    }
  }

  open() {
    if (!this.contentRef) {
      return
    }
    this.contentRef.nativeElement.style.display = 'block';
    // this.contentRef.nativeElement.style.translateX = this._nsWidth;

    anime({
      targets: this.contentRef.nativeElement,
      translateX: 0,
      duration: this.nsDuration,
      easing: 'cubicBezier(.7, .3, .1, 1)'
    })
  }

  private _show() {

  }

  private _openOverlay() {

  }

  close() {
    if (!this.contentRef) {
      return
    }
    // this.contentRef.nativeElement.style.width = 0;
    anime({
      targets: this.contentRef.nativeElement,
      translateX: this._nsWidth,
      duration: this.nsDuration,
      easing: 'cubicBezier(.7, .3, .1, 1)',
      complete: () => {
        // setTimeout(() => {
        this.contentRef.nativeElement.style.display = 'none';
        // }, this.nsDuration * 2)
        this.nsVisible = false;
        this.nsOnClose.emit(null);
      }
    })
  }
}
