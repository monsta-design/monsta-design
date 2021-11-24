import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {RouterModule} from '@angular/router';
import {DocumentModule} from 'projects/site/src/app/common/document/document.module';
import {NSDemoLayoutBasicComponent} from 'projects/lib/src/components/layout/demo/basic.component';
import {NSLayoutModule} from 'projects/lib/src/components/layout';
import {FlexComponent} from './flex.component';
import { FlexDirectionRowComponent } from './flex/flex-direction-row.component';
import { FlexDirectionRowReverseComponent } from './flex/flex-direction-row-reverse.component';
import { FlexDirectionColumnComponent } from './flex/flex-direction-column.component';
import { FlexDirectionColumnReverseComponent } from './flex/flex-direction-column-reverse.component';


@NgModule({
  declarations: [LayoutComponent, NSDemoLayoutBasicComponent, FlexComponent, FlexDirectionRowComponent, FlexDirectionRowReverseComponent, FlexDirectionColumnComponent, FlexDirectionColumnReverseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LayoutComponent
      },
      {
        path: 'flex',
        component: FlexComponent
      }
    ]),
    NSLayoutModule,
    DocumentModule,
  ]
})
export class LayoutModule {
}
