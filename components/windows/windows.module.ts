import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  NSWindowDirective,
  NSWindowsComponent,
  NSWindowsViewComponent
} from './windows.component';

const Components = [
  NSWindowDirective,
  NSWindowsViewComponent,
  NSWindowsComponent,
]

@NgModule({
  declarations: [
    ...Components,
  ],
  exports: [
    ...Components
  ],
  imports: [
    CommonModule
  ]
})
export class NSWindowsModule {
}
