import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSDemoButtonBasicComponent} from './basic';
import {NSButtonModule} from "../button.module";
import {NSDemoButtonSizeComponent} from "./size";
import {NSDemoButtonGroupComponent} from "./group";
import {NSDemoButtonLoadingComponent} from "./loading";


@NgModule({
  declarations: [
    NSDemoButtonBasicComponent,
    NSDemoButtonSizeComponent,
    NSDemoButtonGroupComponent,
    NSDemoButtonLoadingComponent,
  ],
  imports: [
    CommonModule,
    NSButtonModule
  ]
})
export class DemoModule {
}
