import {ComponentRef, EventEmitter} from "@angular/core";

export interface Tab {
  id: string,
  url: string,
  component: any;
  active: boolean;
  title?: string,
  instance?: any;
  componentRef?: ComponentRef<any>;
  metaEmitter?: EventEmitter<NSRouterTabMeta>;
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
