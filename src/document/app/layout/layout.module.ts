import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {RouterModule, Routes} from "@angular/router";
import {NSLayoutModule} from "@components/layout";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  }
]

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NSLayoutModule
  ]
})
export class LayoutModule {
}
