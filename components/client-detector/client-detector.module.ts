import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSClientDetectorComponent} from './client-detector.component';

const Components = [
  NSClientDetectorComponent
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
export class NSClientDetectorModule {
}
