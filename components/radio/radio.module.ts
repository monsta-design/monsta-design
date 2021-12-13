import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSRadioComponent} from './radio.component';

const Components = [
  NSRadioComponent
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
export class NSRadioModule {
}
