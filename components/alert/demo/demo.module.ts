import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSDemoAlertBasicComponent} from "./basic";
import {NSDemoAlertSecondComponent} from "./second";


@NgModule({
  declarations: [
    NSDemoAlertBasicComponent,
    NSDemoAlertSecondComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class DemoModule {
}
