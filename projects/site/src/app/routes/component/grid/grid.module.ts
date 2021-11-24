import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridComponent} from './grid.component';
import {DocumentModule} from 'projects/site/src/app/common/document/document.module';
import {RouterModule} from '@angular/router';
import {NSGridModule} from 'projects/lib/src/components/grid/grid.module';
import {NSDemoGridBasicComponent} from 'projects/lib/src/components/grid/demo/basic.component';
import {NSContainerModule} from 'projects/lib/src/components/container/container.module';
import {NSDemoGridOrderComponent} from 'projects/lib/src/components/grid/demo/order.component';


@NgModule({
  declarations: [
    GridComponent,
    NSDemoGridBasicComponent,
    NSDemoGridOrderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: GridComponent
      }
    ]),
    NSGridModule,
    DocumentModule,
    NSContainerModule
  ]
})
export class GridModule {
}
