import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSDemoLayoutBasicComponent} from "./basic";
import {NSLayoutModule} from "../layout.module";
import {NSDemoLayoutBgComponent} from "./bg";
import {NSDemoLayoutSizeComponent} from "./size";
import {NSDemoLayoutGutterComponent} from "./gutter";
import {NSDemoLayoutResponsiveComponent} from "./responsive";
import {NSDemoLayoutColsComponent} from "./cols";
import {NSDemoLayoutGutterXComponent} from "./gutter-x";
import {NSDemoLayoutGutterYComponent} from "./gutter-y";
import {NSButtonModule} from "../../button";

@NgModule({
  declarations: [
    NSDemoLayoutBasicComponent,
    NSDemoLayoutBgComponent,
    NSDemoLayoutSizeComponent,
    NSDemoLayoutGutterComponent,
    NSDemoLayoutResponsiveComponent,
    NSDemoLayoutColsComponent,
    NSDemoLayoutGutterXComponent,
    NSDemoLayoutGutterYComponent,
  ],
  imports: [
    CommonModule,
    NSLayoutModule,
    NSButtonModule,
  ]
})
export class DemoModule {
}
