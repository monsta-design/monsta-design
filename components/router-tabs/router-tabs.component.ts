import {AfterViewInit, ChangeDetectorRef, Component, Injector, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ActivationEnd, Router} from "@angular/router";
import {Tab, NSRouterTabMeta} from "./types";


@Component({
  selector: 'ns-router-view',
  template: `
    <ng-container *ngFor="let tab of tabs">
      <div [style.display]="tab.active?'block':'none'" [id]="tab.id"
           role="tabpanel">
        <ng-container *ngComponentOutlet="tab.component" (change)="change($event)"></ng-container>
        <!--        <router-outlet *ngComponentOutlet="tab.component" (activate)="onRouterOutletActivate($event)"></router-outlet>-->
      </div>
    </ng-container>`,
  styleUrls: ['./router-tabs.component.scss']
})
export class NSRouterViewComponent {
  public tabs: Tab[] = [];

  constructor(
    private cd: ChangeDetectorRef,
    private router: Router,
  ) {
  }

  deactivateTabs() {
    this.tabs.forEach(tab => (tab.active = false));
  }

  showTab(showTab: Tab) {
    this.deactivateTabs();
    let id = showTab.id
    // check if the tab to be activated is already existing
    if (this.tabs.find(tab => tab.id == id) == null) {
      // if not, push it into the tab array
      this.tabs.push(showTab);
    } else {
      // if the tab exists, activate it
      const tabToActivate = this.tabs.find(tab => tab.id == id);
      if (tabToActivate) {
        this.switchTab(showTab)
      }
    }
    this.cd.detectChanges();
  }

  private triggerOnTabFocus(component): Promise<void> {
    return new Promise<void>(resolve => {
      const prototype = component
      console.log(typeof prototype.nsRouterTabOnFocus, prototype)
      console.log('component', component, component.nsRouterTabOnFocus)
      if (typeof prototype.nsRouterTabOnFocus == 'function') {
        const v = prototype.nsRouterTabOnFocus()
        if (typeof v?.then == 'function') {
          v.then(() => {
            resolve()
          })
        } else {
          resolve()
        }
      } else {
        resolve()
      }
    })
  }

  async switchTab(tab: Tab) {
    for (let item of this.tabs) {
      if (item.id === tab.id) {
        item.active = true
        history.pushState({}, tab.title, tab.url)
        this.triggerOnTabFocus(item.component).then()
        break
      }
    }
  }

  closeTab(tabId: string) {
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].id === tabId) {
        let closeTab = this.tabs[i]
        this.tabs.splice(i, 1)
        if (closeTab.active) {
          if (i + 1 < this.tabs.length) {
            this.switchTab(this.tabs[i + 1]).then()
          } else if (i - 1 >= 0) {
            console.log(this.tabs, i)
            this.switchTab(this.tabs[i - 1]).then()
          }
        }
        break
      }
    }
  }

  // onRouterOutletActivate($event: any) {
  //   console.log('onRouterOutletActivate', $event)
  // }
  change($event: Event) {
    console.log("change", $event)
  }
}

@Component({
  selector: 'ns-router-tabs',
  template: `
    <div class="ns-tabs-wrap">
      <div *ngFor="let tab of nsView.tabs"
           class="ns-router-tab"
           [ngClass]="{active:tab.active}"
           (click)="show(tab)">
        <span>
          {{tab.title || '-'}}
        </span>
        <button class="bs-btn-close" (click)="close(tab.id)"></button>
      </div>
    </div>
  `,
  styleUrls: ['./router-tabs.component.scss']
})
export class NSRouterTabsComponent implements AfterViewInit {

  @Input() nsTabMetaGetter: ((path: string) => NSRouterTabMeta) | ((path: string) => Promise<NSRouterTabMeta>)
  @Input() nsView: NSRouterViewComponent;

  private lastActivationEnd: ActivationEnd;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private injector: Injector,
    private cd: ChangeDetectorRef,
  ) {
    this.router.events.subscribe(v => {
      if (v instanceof ActivationEnd) {
        this.checkAndAddRouteTab(v).then();
      }
    });
  }

  ngAfterViewInit() {
    this.checkAndAddRouteTab(this.lastActivationEnd).then();
  }

  private getTitle(prototype): Promise<string> {
    return new Promise<string>(resolve => {
      const nsRouterTabTitle = prototype.nsRouterTabTitle
      if (nsRouterTabTitle) {
        if (typeof typeof nsRouterTabTitle == 'function') {
          let v = nsRouterTabTitle()
          if (typeof v.then == 'function') {
            v.then(vv => {
              resolve(vv)
            })
          } else {
            resolve(v)
          }
        } else {
          resolve(nsRouterTabTitle)
        }
        return
      } else if (this.nsTabMetaGetter) {
        let v: any = this.nsTabMetaGetter(this.router.url)
        if (typeof v.then == 'function') {
          v.then(vv => {
            resolve(vv.title)
          })
        } else {
          resolve(v.title)
        }
        return
      }
      resolve('')
    })
  }

  async checkAndAddRouteTab(ve: ActivationEnd) {
    const component = ve?.snapshot?.component;
    if (component && ve.snapshot.children.length == 0) {
      this.lastActivationEnd = ve
    }
    if (!component || ve.snapshot.children.length > 0 || !this.nsView) {
      return
    }
    const {RoutesTabIgnore} = ve.snapshot.data
    if (RoutesTabIgnore) {
      return;
    }
    this.lastActivationEnd = ve;
    console.log(ve)
    console.log(this.injector)
    let tab = {
      id: this.router.url,
      // @ts-ignore
      title: await this.getTitle(component.prototype),
      component: component,
      active: true,
      url: this.router.url,
    }
    this.nsView.showTab(tab)
    this.cd.detectChanges();
  }

  tabs() {
    return this.nsView.tabs;
  }

  show(tab: Tab) {
    tab.active = true
    this.nsView.showTab(tab)
  }

  close(tabId: string) {
    this.nsView.closeTab(tabId)
  }
}

