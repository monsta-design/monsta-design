import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSRouterTabsComponent, NSRouterViewComponent} from './router-tabs.component';
import {RouterModule} from "@angular/router";

const Components = [
  NSRouterTabsComponent,
  NSRouterViewComponent,
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
