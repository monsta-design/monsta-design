import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSButtonComponent} from './button.component';
import {NSButtonGroupComponent} from './button-group.component';


const COMPONENTS = [
  NSButtonComponent,
  NSButtonGroupComponent,
];

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
