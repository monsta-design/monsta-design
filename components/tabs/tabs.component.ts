import {AfterContentInit, Component, ContentChildren, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NSTabComponent} from "./tab.component";

@Component({
  selector: 'ns-tabs',
  template: `
    <ul class="bs-nav bs-nav-tabs">
      <li class="bs-nav-item" *ngFor="let title of titles">
        <a class="bs-nav-link ">{{ title }}</a>
      </li>
      <!--      <li class="bs-nav-item bs-active">-->
      <!--        <a class="bs-nav-link">Link</a>-->
      <!--      </li>-->
      <!--      <li class="bs-nav-item">-->
      <!--        <a class="bs-nav-link">Link</a>-->
      <!--      </li>-->
      <!--      <li class="bs-nav-item">-->
      <!--        <a class="bs-nav-link bs-disabled">Disabled</a>-->
      <!--      </li>-->
    </ul>
    <div class="ns-tabs-content">
      <!--      <ng-content></ng-content>-->
      <div #container></div>
    </div>
  `,
})
export class NSTabsComponent implements AfterContentInit {


  @ViewChild('container') container: ElementRef
  @ContentChildren(NSTabComponent) tabs: NSTabComponent[]
  titles: string[] = []

  constructor() {

  }

  ngAfterContentInit(): void {
    for (let item of this.tabs) {
      this.titles.push(item.nsTitle)
    }
  }

}
