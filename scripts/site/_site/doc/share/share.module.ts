import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DemoComponent} from "./demo.component";
import {HighlightComponent} from "./highlight.component";
import {NSLayoutModule} from "@components/layout";
import {NSScrollspyModule} from "@components/scrollspy";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

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
    DemoComponent,
    HighlightComponent,
    NSLayoutModule,
    NSScrollspyModule,
  ]
})
export class ShareModule {
}
