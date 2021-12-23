import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LinkDirectives} from './link.directive';


@NgModule({
  declarations: [
    ...LinkDirectives
  ],
  exports: [
    ...LinkDirectives
  ],
  imports: [
    CommonModule,
  ]
})
export class NSLinkModule {
}
