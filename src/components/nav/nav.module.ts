import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSNavComponent} from './nav.component';
import {NSButtonModule} from "@components/button";


@NgModule({
  declarations: [NSNavComponent],
    imports: [
        CommonModule,
        NSButtonModule
    ],
  exports: [
    NSNavComponent,
  ]
})
export class NSNavModule {
}
