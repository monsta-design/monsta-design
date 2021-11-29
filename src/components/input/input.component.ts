import {Component, Input, OnInit} from '@angular/core';
// import {NS_INPUT_TYPE, NS_SIZE} from 'src/types';


@Component({
  selector: 'ns-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class NSInputComponent implements OnInit {

  @Input() nsSize: string = 'default';
  @Input() nsType: string = 'text';
  @Input() nsPlaceholder: string | null = null;
  @Input() nsDisabled: boolean = false;
  @Input() nsReadonly: boolean = false;
  @Input() nsDataList: string[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
