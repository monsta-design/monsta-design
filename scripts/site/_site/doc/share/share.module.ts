import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DemoComponent} from "./demo.component";
import {HighlightComponent} from "./highlight.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NSLayoutModule} from "monsta-design/layout";
import {NSScrollspyModule} from "monsta-design/scrollspy";

@NgModule({
  declarations: [
    DemoComponent,
    HighlightComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NSLayoutModule,
    NSScrollspyModule,
  ],
  exports: [
    CommonModule,
    NSLayoutModule,
    NSScrollspyModule,
    DemoComponent,
    HighlightComponent,
  ]
})
export class ShareModule {
}
