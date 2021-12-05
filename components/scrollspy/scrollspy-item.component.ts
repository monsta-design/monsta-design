import {Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ns-scrollspy-item',
  template: `<span><ng-content></ng-content></span>`,
})
export class NSScrollspyItemComponent implements OnInit {

  @Input() level: number = null
  @Input() target: string = null
  @Output() trigger: EventEmitter<NSScrollspyItemComponent> = new EventEmitter<NSScrollspyItemComponent>()

  @HostBinding('level') get getLevel(): number {
    return this.level
  }

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('click', ['$event'])
  onClick($event) {
    this.trigger.emit(this)
  }
}
