import {Component, Input, OnInit, TemplateRef} from '@angular/core';
// import {NS_SIZE} from 'src/types';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'ns-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  @Input() nsSize: string | null = null;

  constructor() {

  }

  ngOnInit() {

  }

}
