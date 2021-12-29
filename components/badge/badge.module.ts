import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSBadgeComponent} from "./badge.component";


@NgModule({
  declarations: [
    NSBadgeComponent
  ],
  exports: [
    NSBadgeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NSBadgeModule {
}
