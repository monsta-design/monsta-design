import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSScrollerComponent} from './scroller.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {SimplebarAngularModule} from "simplebar-angular";


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
    DragDropModule,
    SimplebarAngularModule,
  ]
})

export class NSScrollerModule {
}
