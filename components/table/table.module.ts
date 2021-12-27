import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSTableDirective} from './table.directive';


@NgModule({
  declarations: [
    NSTableDirective,
  ],
  exports: [
    NSTableDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class NSTableModule {
}
