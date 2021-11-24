import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSModalComponent} from './modal.component';

@NgModule({
  declarations: [
    NSModalComponent
  ],
  exports: [
    NSModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NSModalModule {
}
