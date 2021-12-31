import {
  AfterViewInit, Attribute,
  ChangeDetectorRef,
  Component, ComponentFactoryResolver, ComponentRef, ContentChild, ContentChildren,
  Directive, EventEmitter,
  Injector,
  Input, NgModuleFactory, OnDestroy,
  OnInit, Output, QueryList, Type, ViewChildren,
  ViewContainerRef
} from '@angular/core';
import {
  ActivatedRoute,
  ActivationEnd,
  ChildrenOutletContexts,
  PRIMARY_OUTLET,
  Router,
} from "@angular/router";
import {Tab, NSRouterTabMeta} from "./types";
import {InputBoolean} from "monsta-design/core";
import {LocationStrategy} from "@angular/common";

class OutletInjector implements Injector {
  constructor(
    private route: ActivatedRoute, private childContexts: ChildrenOutletContexts,
    private parent: Injector) {
  }

  get(token: any, notFoundValue?: any): any {
    if (token === ActivatedRoute) {
      return this.route;
    }

    if (token === ChildrenOutletContexts) {
      return this.childContexts;
    }

    return this.parent.get(token, notFoundValue);
  }
}

@Component({
  selector: 'ns-render',
  template: ``,
})
export class NSRenderComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() nsContext: any;
  @Input() nsComponent: any;
  @Input() nsAfterRender: (context: any, componentRef: ComponentRef<any>) => void
  private componentRef;
  private name;

  constructor(
    private parentContexts: ChildrenOutletContexts,
    private resolver: ComponentFactoryResolver,
    @Attribute('name') name: string,
    private activatedRoute: ActivatedRoute,
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    this.name = name || PRIMARY_OUTLET;
  }

  ngOnInit(): void {
    // console.log('this.nsComponent', this.nsComponent)
    // @ts-ignore
    let context = this.parentContexts.getContext(this.name)
    let resolver = context.resolver || this.resolver;
    const factory = resolver.resolveComponentFactory(this.nsComponent);
    const childContexts = this.parentContexts.getOrCreateContext(this.name).children;
    const injector = new OutletInjector(context.route, childContexts, this.viewContainerRef.injector);
    // 此处替换了源码的按Location长度替换
    this.componentRef = this.viewContainerRef.createComponent(factory, 0, injector);
    // let cFactory = this.componentFactoryResolver.resolveComponentFactory(this.nsComponent);
    // this.componentRef = this.viewContainerRef.createComponent(cFactory);
  }

  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  ngAfterViewInit() {
    if (this.nsAfterRender) {
      this.nsAfterRender(this.nsContext, this.componentRef)
    }
  }

}

@Component({
  selector: 'ns-router-view',
  template: `
    <ng-container *ngFor="let tab of tabs">
      <div [style.display]="tab.active?'block':'none'" [id]="tab.id"
           role="tabpanel">
        <ns-render [nsContext]="tab" [nsComponent]="tab.component" [nsAfterRender]="afterComponentRender"></ns-render>
        <!--        <ns-outlet></ns-outlet>-->
      </div>
    </ng-container>`,
  styleUrls: ['./router-tabs.scss']
})
export class NSRouterViewComponent {
  public tabs: Tab[] = [];
  nsTabMetaGetter: ((path: string) => NSRouterTabMeta) | ((path: string) => Promise<NSRouterTabMeta>);
  @Output() nsOnAfterRendered: EventEmitter<Tab> = new EventEmitter<Tab>();

  constructor(
    private cd: ChangeDetectorRef,
    private router: Router,
  ) {
  }

  afterComponentRender = (tab: Tab, componentRef: ComponentRef<any>) => {
    tab.componentRef = componentRef
    tab.instance = componentRef.instance
    this.getTitle(tab.instance).then(meta => {
      tab.title = meta?.title
    })
    if (typeof tab.instance.nsSetRouterTabMetaEmitter == 'function') {
      tab.metaEmitter = new EventEmitter<NSRouterTabMeta>();
      tab.instance.nsSetRouterTabMetaEmitter(tab.metaEmitter)
      tab.metaEmitter.subscribe(meta => {
        tab.title = meta?.title
      })
    }
    this.nsOnAfterRendered.emit(tab)
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
        this.switchTab(showTab).then()
      }
    }
    this.cd.detectChanges();
  }

  private getTitle(instance: any): Promise<NSRouterTabMeta> {
    return new Promise<NSRouterTabMeta>(resolve => {
      const nsGetRouterTabMeta = instance.nsGetRouterTabMeta
      if (nsGetRouterTabMeta) {
        if (typeof nsGetRouterTabMeta == 'function') {
          let v = nsGetRouterTabMeta()
          if (typeof v.then == 'function') {
            v.then(vv => {
              resolve(vv)
            })
          } else {
            resolve(v)
          }
        } else {
          resolve(nsGetRouterTabMeta)
        }
        return
      } else if (this.nsTabMetaGetter) {
        let v: any = this.nsTabMetaGetter(this.router.url)
        if (typeof v.then == 'function') {
          v.then(vv => {
            resolve(vv)
          })
        } else {
          resolve(v)
        }
        return
      }
      resolve({
        title: 'undefined',
      })
    })
  }

  private triggerOnTabFocus(instance: any): Promise<void> {
    return new Promise<void>(resolve => {
      if (typeof instance.nsOnRouterTabFocus == 'function') {
        const v = instance.nsOnRouterTabFocus()
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
        console.log('切换Tab', tab)
        history.pushState({}, tab.title, tab.url)
        if (item.instance) {
          this.triggerOnTabFocus(item.instance).then()
        }
        break
      }
    }
  }

  private static cleanComponent(closeTab: Tab) {
    closeTab.componentRef?.destroy();
    closeTab.metaEmitter?.unsubscribe();
  }

  closeTab(tabId: string) {
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].id === tabId) {
        let closeTab = this.tabs[i]
        NSRouterViewComponent.cleanComponent(closeTab)
        this.tabs.splice(i, 1)
        if (closeTab.active) {
          if (i + 1 < this.tabs.length) {
            this.switchTab(this.tabs[i + 1]).then()
          } else if (i - 1 >= 0) {
            this.switchTab(this.tabs[i - 1]).then()
          }
        }
        break
      }
    }
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
        <span class="bs-text-truncate" [title]="(nsTitle && tab.title) || ''">
          {{tab.title}}
        </span>
        <button class="bs-btn-close" (click)="close(tab.id)"></button>
      </div>
    </div>
  `,
  styleUrls: ['./router-tabs.scss']
})
export class NSRouterTabsComponent implements AfterViewInit {

  @Input() nsTabMetaGetter: ((path: string) => NSRouterTabMeta) | ((path: string) => Promise<NSRouterTabMeta>)
  @Input() nsView: NSRouterViewComponent;
  @Input() @InputBoolean() nsTitle: boolean = true;

  private lastActivationEnd: ActivationEnd;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private injector: Injector,
    private cd: ChangeDetectorRef,
    private locationStrategy: LocationStrategy,
  ) {
    this.router.events.subscribe(v => {
      if (v instanceof ActivationEnd) {
        this.checkAndAddRouteTab(v).then();
      }
    });
  }

  ngAfterViewInit() {
    this.nsView.nsTabMetaGetter = this.nsTabMetaGetter
    this.checkAndAddRouteTab(this.lastActivationEnd).then();
  }


  async checkAndAddRouteTab(ve: ActivationEnd) {
    const component = ve?.snapshot?.component;
    if (component && ve.snapshot.children.length == 0) {
      this.lastActivationEnd = ve
    }
    if (!component || ve.snapshot.children.length > 0 || !this.nsView) {
      return
    }
    const {RouterTabsIgnore} = ve.snapshot.data
    if (RouterTabsIgnore) {
      return;
    }
    // 处理 module
    console.log('ve', this.route)
    // this.router
    // 处理 Hash 路径下的路径转换
    // let url = this.router.url;
    // if (this.locationStrategy instanceof HashLocationStrategy) {
    //   url = `/#${url}`
    // }
    let url = location.href;
    this.lastActivationEnd = ve;
    let tab = {
      id: url,
      // @ts-ignore
      // title: await this.getTitle(component.prototype),
      component: component,
      active: true,
      url: url,
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

