import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSRouterTabsComponent, NSRouterViewComponent} from './router-tabs.component';

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
    CommonModule
  ]
})
export class NSRouterTabsModule {
}
