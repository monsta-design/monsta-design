import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSNavbarComponent} from './navbar.component';
import {NavbarItemComponent} from './navbar-item.component';


@NgModule({
  declarations: [NSNavbarComponent, NavbarItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NSNavbarComponent,
    NavbarItemComponent
  ]
})
export class NSNavbarModule {
}
