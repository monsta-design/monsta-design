import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StyleDirectives} from "./directives";

const Components = [
  ...StyleDirectives,
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
