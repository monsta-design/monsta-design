import {Component, Input, OnInit} from '@angular/core';
import {faRedoAlt} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'ns-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {


  @Input() _count: Number
  @Input() _percent: Number
  @Input() _title: String
  @Input() _description: String
  @Input() _icon: String

  refresh = faRedoAlt

  constructor() {
  }

  ngOnInit(): void {
  }

}
