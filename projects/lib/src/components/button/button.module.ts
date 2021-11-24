import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSButtonDirective} from './button.directive';

const COMPONENTS = [NSButtonDirective];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class NSButtonModule {

}
