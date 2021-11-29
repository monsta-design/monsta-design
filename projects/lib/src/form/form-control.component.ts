import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {NS_SIZE} from 'projects/lib/src/types';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'ns-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  @Input() nsSize: NS_SIZE | null = null;

  constructor() {

  }

  ngOnInit() {

  }

}
