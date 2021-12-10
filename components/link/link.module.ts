import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSLayoutModule} from "../layout";
import { LinkDirectives} from './link.directive';


@NgModule({
  declarations: [
    ...LinkDirectives
  ],
  exports: [
    ...LinkDirectives
  ],
  imports: [
    CommonModule,
    NSLayoutModule
  ]
})
export class NSLinkModule {
}
