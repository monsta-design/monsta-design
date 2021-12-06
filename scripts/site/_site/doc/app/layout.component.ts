import {Component, OnInit} from '@angular/core';
import {ROUTER_LIST, RouterList} from './router';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'ns-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  routes: any
  docs = false

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
    if (this.router.url.indexOf('/docs/') > -1) {
      this.routes = ROUTER_LIST.intro.filter(v => v.language === 'zh')
      this.docs = true
    } else {
      this.routes = ROUTER_LIST.components.filter(v => v.language === 'zh')
    }
  }

}
