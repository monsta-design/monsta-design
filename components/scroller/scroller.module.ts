import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSScrollerComponent} from './scroller.component';

const Components = [
  NSScrollerComponent,
]

@NgModule({
  declarations: [
    ...Components,
  ],
  exports: [
    ...Components
  ],
  imports: [
    CommonModule,
  ]
})

export class NSScrollerModule {
}
