import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkeletonDirectives} from './skeleton.directive';
import {NSSkeletonsComponent} from './skeletons.component';

const Components = [
  NSSkeletonsComponent,
]

@NgModule({
  declarations: [
    ...Components,
    ...SkeletonDirectives
  ],
  exports: [
    ...Components,
    ...SkeletonDirectives
  ],
  imports: [
    CommonModule
  ]
})
export class NSSkeletonModule {
}
