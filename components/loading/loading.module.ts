import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSLoadingComponent} from './loading.component';

const Components = [
  NSLoadingComponent
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
export class NSLoadingModule {
}
