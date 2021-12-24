import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { NSFormDirective } from './form.directive';
import { NSFormLabelDirective } from './form-label.directive';
import {NSFormFloatingDirective} from "./form-floating.directive";

const Components = [
  NSFormDirective,
  NSFormLabelDirective,
  NSFormFloatingDirective
]

@NgModule({
  declarations: [
    ...Components
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...Components
  ]
})
export class NSFormModule {
}
