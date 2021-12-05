import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSScrollspyComponent} from './scrollspy.component';
import {NSScrollspyItemComponent} from './scrollspy-item.component';

const Components = [
  NSScrollspyComponent,
  NSScrollspyItemComponent,
]

@NgModule({
  declarations: [
    ...Components,
  ],
  exports: [
    ...Components,
  ],
  imports: [
    CommonModule
  ]
})
export class NSScrollspyModule {
}
