import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputDirective} from './input.directive';
import {NSInputGroupComponent} from './input-group.component';
import {NSInputGroupTextComponent} from "./input-group-text.component";


const Components = [
  InputDirective,
  NSInputGroupComponent,
  NSInputGroupTextComponent,
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
