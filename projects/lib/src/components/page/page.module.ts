import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSPageHeaderComponent} from './page-header.component';


@NgModule({
  declarations: [
    NSPageHeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NSPageHeaderComponent,
  ]
})
export class NSPageModule {
}
