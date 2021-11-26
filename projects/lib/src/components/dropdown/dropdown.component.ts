import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import Dropdown from 'monsta-bootstrap/js/src/dropdown.js';

@Component({
  selector: 'ns-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.scss']
})
export class NSDropdownComponent implements OnInit, AfterViewInit {

  @Input() _title: string;
  @Input() _type: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';

  @ViewChild('ref') ref: ElementRef;

  typeClass = ''

  constructor() {
  }

  ngOnInit(): void {
    if (this._type) {
      this.typeClass = 'bs-btn-' + this._type
    }
  }

  ngAfterViewInit() {
    new Dropdown(this.ref.nativeElement)
  }

}
