import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownComponent} from './dropdown/dropdown.component';
import {DropdownDemo1Component} from "../../../../../lib/src/components/dropdown/demo/demo1/demo1.component";
import {NSDropdownModule} from "../../../../../lib/src/components/dropdown/dropdown.module";
import {RouterModule} from "@angular/router";
import {ButtonComponent} from './button/button.component';
import {NSButtonModule} from "../../../../../lib/src/components/button/button.module";
import {ButtonDemo1Component} from "../../../../../lib/src/components/button/demo/demo1.component";
import {ButtonDemo2Component} from "../../../../../lib/src/components/button/demo/demo2.component";
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    DropdownComponent,
    DropdownDemo1Component,
    ButtonComponent,
    ButtonDemo1Component,
    ButtonDemo2Component,
    MenuComponent,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: 'dropdown',
        component: DropdownComponent
      },
      {
        path: 'button',
        component: ButtonComponent
      }
    ]),
    CommonModule,
    NSDropdownModule,
    NSButtonModule
  ]
})
export class ComponentModule {
}
