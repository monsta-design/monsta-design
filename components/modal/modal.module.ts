import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSModalComponent} from './modal.component';

const Components = [
  NSModalComponent
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
export class NSModalModule {
}
