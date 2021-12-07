import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSDemoIconBasicComponent} from "./basic";
import {NSLayoutModule} from "../../layout";

@NgModule({
  declarations: [
    NSDemoIconBasicComponent,
  ],
  imports: [
    CommonModule,
    NSLayoutModule,
  ]
})
export class DemoModule {
}
