import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSResizableDirective} from "./resizable.directive";


@NgModule({
  declarations: [
    NSResizableDirective
  ],
  exports: [
    NSResizableDirective
  ],
  imports: [
    CommonModule
  ]
})
export class NSResizableModule {
}
