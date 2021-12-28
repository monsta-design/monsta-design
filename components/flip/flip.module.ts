import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSFlipComponent} from './flip.component';
import {PortalModule} from "@angular/cdk/portal";


@NgModule({
  declarations: [
    NSFlipComponent
  ],
  exports: [
    NSFlipComponent
  ],
    imports: [
        CommonModule,
        PortalModule
    ]
})
export class NSFlipModule {
}
