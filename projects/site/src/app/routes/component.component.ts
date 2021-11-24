import {Component, OnInit} from '@angular/core';
import {components} from 'projects/site/src/app/config/component';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {
  components = components;

  constructor() {
  }

  ngOnInit(): void {
  }

}

