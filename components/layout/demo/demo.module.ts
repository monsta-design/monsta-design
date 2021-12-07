import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSDemoLayoutBasicComponent} from "./basic";
import {NSLayoutModule} from "../layout.module";
import {NSDemoLayoutSizeComponent} from "./size";
import {NSDemoLayoutGutterComponent} from "./gutter";
import {NSDemoLayoutResponsiveComponent} from "./responsive";
import {NSDemoLayoutColsComponent} from "./cols";
import {NSDemoLayoutGutterXComponent} from "./gutter-x";
import {NSDemoLayoutGutterYComponent} from "./gutter-y";
import {NSButtonModule} from "../../button";
import {NSDemoLayoutGridComponent} from "./grid";

@NgModule({
  declarations: [
    NSDemoLayoutBasicComponent,
    NSDemoLayoutSizeComponent,
    NSDemoLayoutGutterComponent,
    NSDemoLayoutResponsiveComponent,
    NSDemoLayoutColsComponent,
    NSDemoLayoutGutterXComponent,
    NSDemoLayoutGutterYComponent,
    NSDemoLayoutGridComponent,
  ],
  imports: [
    CommonModule,
    NSLayoutModule,
    NSButtonModule,
  ]
})
export class DemoModule {
}
