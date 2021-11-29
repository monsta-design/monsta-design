import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSInputComponent} from './input.component';


@NgModule({
  declarations: [NSInputComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NSInputComponent
  ]
})
export class NSInputModule {
}
