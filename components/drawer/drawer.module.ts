import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSDrawerComponent} from './drawer.component';
import {NSDrawerDirective} from './drawer.directive';

@NgModule({
  declarations: [
    NSDrawerComponent,
    NSDrawerDirective,
  ],
  exports: [
    NSDrawerComponent,
    NSDrawerDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class NSDrawerModule {
}
