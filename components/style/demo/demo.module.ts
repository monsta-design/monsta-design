import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSDemoStyleBgComponent} from "./bg";
import {NSLayoutModule} from "../../layout";
import {NSStyleModule} from "../style.module";
import {NSDemoStyleShadowComponent} from "./shadow";
import {NSDemoStyleBorderComponent} from "./border";
import {NSDemoStyleRoundedComponent} from "./rounded";

@NgModule({
  declarations: [
    NSDemoStyleBgComponent,
    NSDemoStyleShadowComponent,
    NSDemoStyleBorderComponent,
    NSDemoStyleRoundedComponent,
  ],
  imports: [
    CommonModule,
    NSLayoutModule,
    NSStyleModule,
  ]
})
export class DemoModule {
}
