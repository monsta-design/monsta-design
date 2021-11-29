import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageComponent} from './page.component';
import {NSPageModule} from "../../../../../lib/src/page/page.module";
import {NSPageHeaderDemo1Component} from "../../../../../lib/src/page/demo/header-demo1.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    PageComponent,
    NSPageHeaderDemo1Component
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: PageComponent
      }
    ]),
    CommonModule,
    NSPageModule
  ]
})
export class PageModule {
}
