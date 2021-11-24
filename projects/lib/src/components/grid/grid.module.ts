import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSColDirective} from './col.directive';
import {NSRowDirective} from './row.directive';

const COMPONENTS = [
  NSColDirective,
  NSRowDirective,
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
export class NSGridModule {
}
