import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSDemoLoadingBasicComponent} from "./basic";
import {NSLayoutModule} from "../../layout";

@NgModule({
  declarations: [
    NSDemoLoadingBasicComponent,
  ],
  imports: [
    CommonModule,
    NSLayoutModule,
  ]
})
export class DemoModule {
}
