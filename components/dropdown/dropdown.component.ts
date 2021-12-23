import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import Dropdown from 'monsta-bootstrap/js/src/dropdown.js';
import {Color} from 'monsta-design/core';

@Component({
  selector: 'ns-dropdown',
  template: `
    <div class="bs-btn-group">
      <button #ref type="button" class="bs-btn bs-dropdown-toggle" [ngClass]="typeClass" data-bs-toggle="dropdown"
              aria-expanded="false">
        {{ nsTitle }}
      </button>
      <!--  <button #ref type="button" class="bs-btn bs-btn-danger">Action2</button>-->
      <!--  <button #ref type="button" class="bs-btn bs-btn-danger bs-dropdown-toggle bs-dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">-->
      <!--    <span class="bs-visually-hidden">Toggle Dropdown</span>-->
      <!--  </button>-->
      <ul class="bs-dropdown-menu">
        <!--    <li><a class="bs-dropdown-item" href="#">Action</a></li>-->
        <!--    <li><a class="bs-dropdown-item" href="#">Another action</a></li>-->
        <!--    <li><a class="bs-dropdown-item" href="#">Something else here</a></li>-->
        <!--    <li><hr class="bs-dropdown-divider"></li>-->
        <!--    <li><a class="bs-dropdown-item" href="#">Separated link</a></li>-->
        <ng-content></ng-content>
      </ul>
    </div>
  `,
  styleUrls: ['./dropdown.scss']
})
export class NSDropdownComponent implements AfterViewInit {

  @Input() nsTitle: string;
  @Input() nsType: Color = 'primary';

  @ViewChild('ref') ref: ElementRef;
  typeClass = ''

  constructor() {
    if (this.nsType) {
      this.typeClass = 'bs-btn-' + this.nsType
    }
  }


  ngAfterViewInit() {
    new Dropdown(this.ref.nativeElement)
  }

}
