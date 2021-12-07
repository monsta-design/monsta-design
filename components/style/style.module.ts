import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BGDirective} from "./directives/background.directive";
import {TextDirectives} from "./directives/text.directive";
import {BorderDirectives} from "./directives/border.directive";

const Components = [
  BGDirective,
  ...TextDirectives,
  ...BorderDirectives
]

@NgModule({
  declarations: [
    ...Components
  ],
  exports: [
    ...Components
  ],
  imports: [
    CommonModule,
  ]
})
export class NSStyleModule {
}
