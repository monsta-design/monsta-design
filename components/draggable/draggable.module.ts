import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSDraggableDirective} from "./draggable.directive";


@NgModule({
  declarations: [
    NSDraggableDirective
  ],
  exports: [
    NSDraggableDirective
  ],
  imports: [
    CommonModule
  ]
})
export class NSDraggableModule {
}
