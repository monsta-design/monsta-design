import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSMenuComponent} from './menu.component';
import {NSMenuHeaderComponent} from './menu-header.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NSMenuDividerComponent} from './menu-divider.component';
import {NSMenuItemComponent} from "./menu-item.component";

@NgModule({
  declarations: [
    NSMenuComponent,
    NSMenuItemComponent,
    NSMenuHeaderComponent,
    NSMenuDividerComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    NSMenuComponent,
    NSMenuItemComponent,
    NSMenuHeaderComponent,
    NSMenuDividerComponent,
  ]
})
export class NSMenuModule {
}
