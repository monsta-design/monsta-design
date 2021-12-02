import {AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'ns-alert',
  template: `
    <div #alert class="bs-alert">
      <ng-content></ng-content>
    </div>`,
  styleUrls: ['./alert.component.scss']
})
export class NSAlertComponent implements AfterViewInit {

  @Input('type') nsType: string = 'primary';
  @HostBinding() class = 'bs-alert';
  @HostBinding() role = 'alert';

  @ViewChild('alert') alert: ElementRef


  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    this.alert.nativeElement.classList.add(`bs-alert-${this.nsType}`);
  }

}
