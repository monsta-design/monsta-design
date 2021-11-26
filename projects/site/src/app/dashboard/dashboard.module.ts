import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {DashboardLayoutComponent} from './layout.component';
import {RouterModule} from "@angular/router";
import {NSPageModule} from "../../../../lib/src/components/page/page.module";


@NgModule({
  declarations: [HomeComponent, DashboardLayoutComponent],
  imports: [
    RouterModule.forChild([
      {
        path: 'home',
        component: HomeComponent
      }
    ]),
    CommonModule,
    NSPageModule,
  ]
})
export class DashboardModule {
}
