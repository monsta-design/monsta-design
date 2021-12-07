import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSDemoSpaceBasicComponent} from "./basic";
import {NSLayoutModule} from "../../layout";

@NgModule({
  declarations: [
    NSDemoSpaceBasicComponent,
  ],
  imports: [
    CommonModule,
    NSLayoutModule,
  ]
})
export class DemoModule {
}
