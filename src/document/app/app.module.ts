import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DocumentLayoutComponent} from './layout.component';

import {NSFormModule} from '@components/form';
import {NSInputModule} from '@components/input';
import {NSNavModule} from '@components/nav';
import {NSLayoutModule} from "@components/layout/layout.module";
import {NSDropdownModule} from "@components/dropdown/dropdown.module";
import {NSNavbarModule} from "@components/navbar/navbar.module";
import {NSButtonModule} from "@components/button/button.module";
import {NSMenuModule} from "@components/menu/menu.module";
import {NSPageModule} from "@components/page/page.module";


@NgModule({
  declarations: [
    AppComponent,
    DocumentLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NSLayoutModule,
    NSFormModule,
    NSInputModule,
    NSNavModule,
    NSDropdownModule,
    NSNavbarModule,
    NSButtonModule,
    NSMenuModule,
    NSPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
