import {Component, OnInit} from '@angular/core';
import {components} from 'projects/site/src/app/nav';
import {
  faChalkboard,
  faChartPie,
  faEnvelope,
  faThLarge,
  faHeart,
  faFileAlt,
  faTable,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-component',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class DocumentLayoutComponent implements OnInit {
  components = components;
  icons = {
    dashboard: faChalkboard,
    analytics: faChartPie,
    email: faEnvelope,
    widgets: faThLarge,
    uiKits: faHeart,
    forms: faFileAlt,
    tables: faTable,
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}

