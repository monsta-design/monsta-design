import {ComponentRef} from "@angular/core";

export interface Tab {
  id: string,
  url: string,
  component: any;
  active: boolean;
  title?: string,
  instance?: any;
}

export interface NSRouterTabMeta {
  title: string,
}

export declare interface NSRouterTab {
  nsRouterTabOnFocus: () => void
  nsRouterTabTitle: string;
}
