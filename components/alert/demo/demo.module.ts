import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSDemoAlertBasicComponent} from "./basic";
import {NSDemoAlertSecondComponent} from "./second";
import {NSAlertModule} from "../alert.module";


@NgModule({
  declarations: [
    NSDemoAlertBasicComponent,
    NSDemoAlertSecondComponent,
  ],
    imports: [
        CommonModule,
        NSAlertModule
    ]
})
export class DemoModule {
}
