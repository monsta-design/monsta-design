import {Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ns-scrollspy-item',
  template: `<span><ng-content></ng-content></span>`,
})
export class NSScrollspyItemComponent implements OnInit {

  @Input() level: number | string = null
  @Input() target: string = null
  @Output() trigger: EventEmitter<NSScrollspyItemComponent> = new EventEmitter<NSScrollspyItemComponent>()

  @HostBinding('level') get getLevel(): any {
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
