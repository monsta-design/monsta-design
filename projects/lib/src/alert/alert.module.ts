import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSAlertComponent} from './alert.component';


@NgModule({
  declarations: [NSAlertComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NSAlertComponent,
  ]
})
export class NSAlertModule {
}
