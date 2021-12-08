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
import {NSDemoLayoutFlexComponent} from "./flex";
import {NSDemoLayoutFlexJustifyContentComponent} from "./flex-justify-content";
import {NSDemoLayoutLayout1Component} from "./layout1";
import {NSStyleModule} from "../../style";
import {NSDemoLayoutLayout2Component} from "./layout2";
import {NSDemoLayoutLayout3Component} from "./layout3";

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
    NSDemoLayoutFlexComponent,
    NSDemoLayoutFlexJustifyContentComponent,
    NSDemoLayoutLayout1Component,
    NSDemoLayoutLayout2Component,
    NSDemoLayoutLayout3Component,
  ],
  imports: [
    CommonModule,
    NSLayoutModule,
    NSStyleModule,
    NSButtonModule,
  ]
})
export class DemoModule {
}
