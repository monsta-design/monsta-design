import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSBreadcrumbComponent} from './breadcrumb.component';
import {NSBreadcrumbItemComponent} from "./breadcrumb-item.component";

const Components = [
  NSBreadcrumbComponent,
  NSBreadcrumbItemComponent,
]

@NgModule({
  declarations: [
    ...Components,
  ],
  exports: [
    ...Components,
  ],
  imports: [
    CommonModule
  ]
})
export class NSBreadcrumbModule {
}
