import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

export interface NSOffset {
  x: number,
  y: number,
}

@Directive({
  selector: '[nsScrollerBar]'
})
export class NSScrollerBarDirective {

  private down = false;
  @Output() nsOffset: EventEmitter<NSOffset> = new EventEmitter<NSOffset>();

  @HostListener('mousedown') mousedown() {
    console.log('mousedown')
    this.down = true
  }

  @HostListener('mouseleave') mouseleave() {
    console.log('mouseleave')
    // this.down = false
  }

  @HostListener('mouseup') mouseup() {
    this.down = false
    console.log('mouseup')
  }

  @HostListener('mousemove', ['$event']) mousemove(e) {
    if (this.down) {
      console.log(e.layerX)
      this.nsOffset.emit({
        x: e.offsetX,
        y: e.offsetY,
      })
    }
  }

}
