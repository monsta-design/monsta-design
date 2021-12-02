import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageComponent} from './page.component';
import {NSPageModule} from "../../../../components/page/page.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    PageComponent,
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
