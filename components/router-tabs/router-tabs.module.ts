import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  NSRenderComponent,
  NSRouterTabsComponent,
  NSRouterViewComponent
} from './router-tabs.component';
import {RouterModule} from "@angular/router";
import {RouterOutlet} from "./outlet";
import {NSOutletComponent} from "./outlet.component";

const Components = [
  RouterOutlet,
  NSOutletComponent,
  NSRenderComponent,
  NSRouterTabsComponent,
  NSRouterViewComponent
]

@NgModule({
  declarations: [
    ...Components
  ],
  exports: [
    ...Components
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class NSRouterTabsModule {
}
