import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar.component';
import {RouterModule} from "@angular/router";
import {DocumentModule} from "../../../common/document/document.module";
import {NsSidebarModule} from "../../../../../../lib/src/sidebar/sidebar.module";
import {NsSidebarBasicComponent} from "../../../../../../lib/src/sidebar/demo/basic.component";


@NgModule({
  declarations: [SidebarComponent, NsSidebarBasicComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SidebarComponent
      }
    ]),
    CommonModule,
    DocumentModule,
    NsSidebarModule,
  ]
})
export class SidebarModule {
}
