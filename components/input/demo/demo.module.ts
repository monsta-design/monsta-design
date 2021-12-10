import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSDemoInputBasicComponent} from "./basic";
import {NSInputModule} from "../input.module";
import {NSDemoInputLabelComponent} from "./label";
import {NSLayoutModule} from "../../layout";


@NgModule({
  declarations: [
    NSDemoInputBasicComponent,
    NSDemoInputLabelComponent,
  ],
  imports: [
    CommonModule,
    NSInputModule,
    NSLayoutModule,
  ]
})
export class DemoModule {
}
