import {Component, OnInit} from '@angular/core';
import {ROUTER_LIST} from './router';

@Component({
  selector: 'ns-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  routes = ROUTER_LIST

  constructor() {
  }

  ngOnInit(): void {
  }

}
