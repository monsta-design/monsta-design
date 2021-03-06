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
import {Tab, NSRouterTabMeta, NSRouterTabsIndex} from "./types";
import {InputBoolean} from "monsta-design/core";
import {replace, trimStart} from "lodash";

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
  private readonly name;

  constructor(
    private parentContexts: ChildrenOutletContexts,
    private resolver: ComponentFactoryResolver,
    @Attribute('name') name: string,
    public viewContainerRef: ViewContainerRef,
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
    // ???????????????????????????Location????????????
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
  @Output() nsOnAfterRendered: EventEmitter<Tab> = new EventEmitter<Tab>();

  public tabs: Tab[] = [];
  public nsIndex: NSRouterTabsIndex; // ??????????????????
  private currentTab: Tab;
  nsTabMetaGetter: ((path: string) => NSRouterTabMeta) | ((path: string) => Promise<NSRouterTabMeta>);

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

  async showTab(showTab: Tab) {
    this.deactivateTabs();
    let id = showTab.id
    // check if the tab to be activated is already existing
    if (this.tabs.find(tab => tab.id == id) == null) {
      // if not, push it into the tab array
      this.tabs.push(showTab);
      this.currentTab = showTab;
    } else {
      // if the tab exists, activate it
      const tabToActivate = this.tabs.find(tab => tab.id == id);
      if (tabToActivate) {
        await this.switchTab(showTab)
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
        if (item.id !== this.currentTab?.id) {
          this.currentTab = item
          await this.router.navigateByUrl(item.urlTree)
          if (item.instance) {
            this.triggerOnTabFocus(item.instance).then()
          }
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
        if (this.tabs.length == 0) {
          // ?????????????????????
          if (this.nsIndex) {
            this.router.navigate(this.nsIndex.commands, this.nsIndex.extras).then()
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
  @Input() nsIndex: NSRouterTabsIndex = null // ??????????????????

  private lastActivationEnd: ActivationEnd;

  constructor(
    private route: ActivatedRoute,
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
    this.nsView.nsTabMetaGetter = this.nsTabMetaGetter
    this.nsView.nsIndex = this.nsIndex
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

    let url = location.href;
    this.lastActivationEnd = ve;
    let tab: Tab = {
      id: url,
      component: component,
      active: true,
      url: url,
      urlTree: this.router.parseUrl(this.router.url)
    }
    await this.nsView.showTab(tab)
    this.cd.detectChanges();
  }

  tabs() {
    return this.nsView.tabs;
  }

  async show(tab: Tab) {
    tab.active = true
    await this.nsView.showTab(tab)
  }

  close(tabId: string) {
    this.nsView.closeTab(tabId)
  }

  getStyle(tab: Tab) {
    let style = {}
    if (tab.background) {

    }
  }
}

