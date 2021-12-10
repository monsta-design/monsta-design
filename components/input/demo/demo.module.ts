import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSDemoInputBasicComponent} from "./basic";
import {NSInputModule} from "../input.module";
import {NSDemoInputLabelComponent} from "./label";
import {NSLayoutModule} from "../../layout";
import {NSStyleModule} from "../../style";


@NgModule({
  declarations: [
    NSDemoInputBasicComponent,
    NSDemoInputLabelComponent,
  ],
  imports: [
    CommonModule,
    NSInputModule,
    NSLayoutModule,
    NSStyleModule,
  ]
})
export class DemoModule {
}
