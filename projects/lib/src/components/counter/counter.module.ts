import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CounterComponent} from './counter.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    CounterComponent
  ]
})
export class NSCounterModule {
}
