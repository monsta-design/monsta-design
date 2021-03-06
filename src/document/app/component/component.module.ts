import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownComponent} from './dropdown/dropdown.component';
import {NSDropdownModule} from "../../../../components/dropdown/dropdown.module";
import {RouterModule} from "@angular/router";
import {ButtonComponent} from './button/button.component';
import {NSButtonModule} from "../../../../components/button/button.module";
import {ButtonDemo1Component} from "../../../../components/button/demo/demo1";
import {ButtonDemo2Component} from "../../../../components/button/demo/demo2";
import {MenuComponent} from './menu/menu.component';
import {SidebarComponent} from "./sidebar/sidebar.component";
import {NSMenuModule} from "../../../../components/menu/menu.module";
import {CounterComponent} from './counter/counter.component';
import {NSCounterModule} from "../../../../components/counter/counter.module";
import {NSPageModule} from "../../../../components/page/page.module";


const routes = [
  {
    path: 'dropdown',
    component: DropdownComponent
  },
  {
    path: 'button',
    component: ButtonComponent
  },
  {
    path: 'sidebar',
    component: SidebarComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  },
]

@NgModule({
  declarations: [
    DropdownComponent,
    ButtonComponent,
    ButtonDemo1Component,
    ButtonDemo2Component,
    MenuComponent,
    CounterComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NSDropdownModule,
    NSButtonModule,
    NSMenuModule,
    NSCounterModule,
    NSPageModule
  ]
})
export class ComponentModule {
}
