import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSMenuComponent} from './menu.component';
import {NSMenuItemComponent} from './menu-item.component';
import {NSMenuGroupComponent} from './menu-group.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NSMenuComponent, NSMenuItemComponent, NSMenuGroupComponent],
  exports: [NSMenuComponent, NSMenuItemComponent, NSMenuGroupComponent]
})
export class NSMenuModule {

}

