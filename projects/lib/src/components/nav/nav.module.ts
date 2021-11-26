import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSNavComponent} from 'projects/lib/src/components/nav/nav.component';
import {NSButtonModule} from "../button/button.module";


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
