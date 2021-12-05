import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSDemoLayoutBasicComponent} from "./basic";
import {NSLayoutModule} from "../layout.module";
import {NSDemoLayoutBgComponent} from "./bg";
import {NSDemoLayoutSizeComponent} from "./size";

@NgModule({
  declarations: [
    NSDemoLayoutBasicComponent,
    NSDemoLayoutBgComponent,
    NSDemoLayoutSizeComponent,
  ],
  imports: [
    CommonModule,
    NSLayoutModule,
  ]
})
export class DemoModule {
}
