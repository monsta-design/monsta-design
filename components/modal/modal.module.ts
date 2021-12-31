import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSModalComponent} from './modal.component';
import {NSModalServiceModule} from "./modal.service.module";

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
    CommonModule,
    NSModalServiceModule
  ]
})
export class NSModalModule {
}
