import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {NSFormModule} from 'projects/lib/src/form';
import {NSInputModule} from 'projects/lib/src/input';
import {NSNavModule} from 'projects/lib/src/nav';
import {DocumentLayoutComponent} from 'projects/site/src/app/document/layout.component';
import {NSLayoutModule} from "../../../lib/src/layout/layout.module";
import {NSDropdownModule} from "../../../lib/src/dropdown/dropdown.module";
import {NSNavbarModule} from "../../../lib/src/navbar/navbar.module";
import {NSButtonModule} from "../../../lib/src/button/button.module";
import {NSMenuModule} from "../../../lib/src/menu/menu.module";
import {NSPageModule} from "../../../lib/src/page/page.module";


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
