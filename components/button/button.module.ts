import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSButtonGroupComponent} from './button-group.component';
import {ButtonDirectives} from "./button.directive";


const COMPONENTS = [
  NSButtonGroupComponent,
  ...ButtonDirectives
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule
  ],
})
export class NSButtonModule {

}
