import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSPaginationComponent} from './pagination.component';

export const Components = [
  NSPaginationComponent
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
export class NSPaginationModule {
}
