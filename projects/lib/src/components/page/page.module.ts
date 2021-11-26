import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSPageSidebarComponent} from './page-sidebar.component';
import {NSPageHeaderComponent} from './page-header.component';


@NgModule({
  declarations: [
    NSPageSidebarComponent,
    NSPageHeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NSPageSidebarComponent,
    NSPageHeaderComponent,
  ]
})
export class NSPageModule {
}
