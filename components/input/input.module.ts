import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NSInputComponent} from './input.component';
import {NSFloatingInputComponent} from "./floating.component";


const Components = [
  NSInputComponent,
  NSFloatingInputComponent,
]

@NgModule({
  declarations: [
    ...Components,
  ],
  exports: [
    ...Components
  ],
  imports: [
    CommonModule
  ]
})
export class NSInputModule {
}
