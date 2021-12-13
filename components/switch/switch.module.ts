import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSSwitchComponent} from './switch.component';

const Components = [
  NSSwitchComponent
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
export class NSSwitchModule {
}
