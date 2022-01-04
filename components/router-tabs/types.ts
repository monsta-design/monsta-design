import {ComponentRef, EventEmitter} from "@angular/core";
import {NavigationExtras, UrlTree} from "@angular/router";

export interface Tab {
  id: string,
  url: string,
  component: any;
  active: boolean;
  title?: string,
  instance?: any;
  componentRef?: ComponentRef<any>;
  metaEmitter?: EventEmitter<NSRouterTabMeta>;
  urlTree: UrlTree,
}

export interface NSRouterTabMeta {
  title: string,
}

export type NSRouterTabMetaGetter = (() => NSRouterTabMeta) | (() => Promise<NSRouterTabMeta>);

export declare interface NSRouterTab {
  nsOnRouterTabFocus: () => void
  nsGetRouterTabMeta: NSRouterTabMetaGetter,
  nsSetRouterTabMetaEmitter: (emitter: EventEmitter<NSRouterTabMeta>) => void
}

export interface NSRouterTabsIndex {
  commands: any[],
  extras?: NavigationExtras,
}
