import {Component, Input, OnInit} from '@angular/core';
import {NS_INPUT_TYPE, NS_SIZE} from 'projects/lib/src/types';


@Component({
  selector: 'ns-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class NSInputComponent implements OnInit {

  @Input() nsSize: NS_SIZE = 'default';
  @Input() nsType: NS_INPUT_TYPE = 'text';
  @Input() nsPlaceholder: string | null = null;
  @Input() nsDisabled: boolean = false;
  @Input() nsReadonly: boolean = false;
  @Input() nsDataList: string[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
