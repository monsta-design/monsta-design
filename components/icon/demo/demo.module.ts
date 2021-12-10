import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSDemoIconBasicComponent} from "./basic";
import {NSLayoutModule} from "../../layout";
import {NSStyleModule} from "../../style";

@NgModule({
  declarations: [
    NSDemoIconBasicComponent,
  ],
    imports: [
        CommonModule,
        NSLayoutModule,
        NSStyleModule,
    ]
})
export class DemoModule {
}
