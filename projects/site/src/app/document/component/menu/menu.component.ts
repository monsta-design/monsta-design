import { Component, OnInit } from '@angular/core';
import {
  faChalkboard,
  faChartPie,
  faEnvelope,
  faFileAlt,
  faHeart,
  faTable,
  faThLarge
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  icons = {
    dashboard: faChalkboard,
    analytics: faChartPie,
    email: faEnvelope,
    widgets: faThLarge,
    uiKits: faHeart,
    forms: faFileAlt,
    tables: faTable,
  }

  constructor() { }

  ngOnInit() {
  }

}
