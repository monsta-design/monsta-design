import {Component, OnInit} from '@angular/core';

import {data} from "../../../../../../lib/src/components/sidebar/doc";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  data = data

  constructor() {
  }

  ngOnInit(): void {
  }

}
