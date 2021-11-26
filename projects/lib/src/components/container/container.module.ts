import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContainerDirective} from './container.directive';
import { NsContainerComponent } from './container.component';


@NgModule({
  declarations: [
    ContainerDirective,
    NsContainerComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContainerDirective,
  ]
})
export class NSContainerModule {
}
