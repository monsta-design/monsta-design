import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSMessageComponent} from './message.component';
import {OverlayModule} from "@angular/cdk/overlay";
import {NSMessageServiceModule} from "./message.service.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    NSMessageComponent
  ],
  exports: [
    NSMessageComponent,
  ],
    imports: [
        CommonModule,
        OverlayModule,
        NSMessageServiceModule,
        FontAwesomeModule
    ]
})
export class NSMessageModule {
}
