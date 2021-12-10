import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputDirectives} from './input.directive';
import {InputComponent} from './input/input.component';


const Components = [
  ...InputDirectives
]

@NgModule({
  declarations: [
    ...Components,
    InputComponent,
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
