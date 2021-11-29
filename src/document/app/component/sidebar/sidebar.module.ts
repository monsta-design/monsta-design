import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar.component';
import {RouterModule} from "@angular/router";
// import {DocumentModule} from "../../common/document/document.module";
// import {NsSidebarBasicComponent} from "../../../../../../../lib/src/sidebar/demo/basic.component";
// import {NsSidebarModule} from "../../../../../../../lib/src/sidebar/sidebar.module";


@NgModule({
  declarations: [SidebarComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SidebarComponent
      }
    ]),
    CommonModule,
    // DocumentModule,
    // NsSidebarModule,
  ]
})
export class SidebarModule {
}
