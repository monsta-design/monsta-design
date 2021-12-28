import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges, ViewChild
} from '@angular/core';
import {InputBoolean} from "monsta-design/core";
import anime from "animejs/lib/anime.es.js";


@Component({
  selector: 'ns-drawer',
  template: `
    <div #contentRef class="ns-drawer-content">
      <ng-content></ng-content>
    </div>
    <div class="ns-drawer-mask" (click)="close()" [style.display]="nsMask&&nsVisible?'block':'none'"></div>
  `,
  styleUrls: ['./drawer.scss'],
  host: {}
})
export class NSDrawerComponent implements OnChanges, AfterViewInit {

  @Input() @InputBoolean() nsFloat: boolean = true;
  @Input() @InputBoolean() nsVisible: boolean = false;
  @Input() @InputBoolean() nsMask: boolean = false;
  @Input() nsPlacement: 't' | 'b' | 's' | 'e' = 'e';
  @Input() nsDuration: number = 200;
  @Input() nsMode: 'float' | 'embed' = 'float';
  @Input() nsWidth: number = 256;
  @Input() nsHeight: number = 256;


  @Output() nsOnClose: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('contentRef') contentRef: ElementRef;


  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.contentRef.nativeElement.style.transform = this.getTransformOffset();
    this.setContentSize();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const {nsVisible, nsWidth, nsHeight} = changes;
    if (nsVisible) {
      if (nsVisible.currentValue) {
        this.open()
      } else {
        this.close()
      }
    }
    if (nsWidth || nsHeight) {
      this.setContentSize();
    }
  }

  private setContentSize() {
    if (!this.contentRef) {
      return
    }
    if (this.nsPlacement == 's' || this.nsPlacement == 'e') {
      this.contentRef.nativeElement.style.width = `${this.nsWidth}px`
      this.contentRef.nativeElement.style.height = '100%'
    } else {
      this.contentRef.nativeElement.style.height = `${this.nsHeight}px`
      this.contentRef.nativeElement.style.width = '100%'
    }
  }

  open() {
    if (!this.contentRef) {
      return
    }
    this.contentRef.nativeElement.style.display = 'block';
    const params = this.makeAnimeParams(true)
    anime(params)
  }


  close() {
    if (!this.contentRef) {
      return
    }
    const params = this.makeAnimeParams(false)
    params.complete = () => {
      this.contentRef.nativeElement.style.display = 'none';
      this.nsVisible = false;
      this.nsOnClose.emit(null);
    }
    anime(params)
  }

  getTransformOffset() {
    switch (this.nsPlacement) {
      case 't':
        return `translateY(-${this.nsHeight + 'px'})`;
      case 'b':
        return `translateY(${this.nsHeight + 'px'})`;
      case 's':
        return `translateX(-${this.nsWidth + 'px'})`;
      case 'e':
        return `translateX(${this.nsWidth + 'px'})`;
    }
  }

  makeAnimeParams(open: boolean) {
    let params: any = {
      targets: this.contentRef.nativeElement,
      duration: this.nsDuration,
      easing: 'cubicBezier(.7, .3, .1, 1)'
    }
    switch (this.nsPlacement) {
      case 't':
        if (open) {
          params.translateY = 0
        } else {
          params.translateY = -this.nsHeight
        }
        break;
      case 'b':
        if (open) {
          params.translateY = 0
        } else {
          params.translateY = this.nsHeight
        }
        break;
      case 's':
        if (open) {
          params.translateX = 0
        } else {
          params.translateX = -this.nsWidth
        }
        break;
      case 'e':
        if (open) {
          params.translateX = 0
        } else {
          params.translateX = this.nsWidth
        }
        break;
    }
    return params
  }
}
