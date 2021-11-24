import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './menu.component';
import {RouterModule} from '@angular/router';
import {DocumentModule} from 'projects/site/src/app/common/document/document.module';
import {NSDemoMenuBasicComponent} from 'projects/lib/src/components/menu/demo/basic.component';
import {NSMenuModule} from 'projects/lib/src/components/menu';



@NgModule({
  declarations: [LayoutComponent, NSDemoMenuBasicComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LayoutComponent
      }
    ]),
    NSMenuModule,
    DocumentModule,
  ]
})
export class MenuModule { }
