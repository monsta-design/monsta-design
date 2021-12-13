import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSRangeComponent} from "./range.component";

const Components = [
  NSRangeComponent,
]

@NgModule({
  declarations: [
    ...Components
  ],
  exports: [
    ...Components
  ],
  imports: [
    CommonModule
  ]
})
export class NSRangeModule {
}
