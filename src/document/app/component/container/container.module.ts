import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContainerComponent} from './container.component';
import {RouterModule} from '@angular/router';
import {NSDemoContainerBasicComponent} from '@components/container/demo/basic.component';


@NgModule({
  declarations: [ContainerComponent, NSDemoContainerBasicComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContainerComponent,
      }
    ]),
  ]
})
export class ContainerModule {
}
