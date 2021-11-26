import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NsSidebarComponent} from './sidebar.component';

@NgModule({
  declarations: [NsSidebarComponent],
  exports: [
    NsSidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NsSidebarModule {
}
