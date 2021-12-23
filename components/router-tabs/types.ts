import {Route} from "@angular/router";
import {BehaviorSubject} from "rxjs";

export interface Tab {
  id: string,
  title: string,
  url: string,
  name?: string;
  component: any;
  active: boolean;
  route?: Route;
  key?: string;
  count?: BehaviorSubject<number>;
}

export interface NSRouterTabMeta {
  title: string,
}

export declare interface NSRouterTab {
  onTabFocus();

  nsGetTabTitle(): string;
}
