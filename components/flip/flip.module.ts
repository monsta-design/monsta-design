import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSFlipComponent} from './flip.component';


@NgModule({
  declarations: [
    NSFlipComponent
  ],
  exports: [
    NSFlipComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NSFlipModule {
}
