import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DemoComponent} from "./demo.component";
import {HighlightComponent} from "./highlight.component";
import {NSLayoutModule} from "@components/layout";
import {NSScrollspyModule} from "@components/scrollspy";

@NgModule({
  declarations: [
    DemoComponent,
    HighlightComponent,
  ],
  imports: [
    CommonModule,
    NSLayoutModule,
    NSScrollspyModule,
  ],
  exports: [
    DemoComponent,
    HighlightComponent,
    NSLayoutModule,
    NSScrollspyModule,
  ]
})
export class ShareModule {
}
