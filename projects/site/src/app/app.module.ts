import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {NSFormModule} from 'projects/lib/src/components/form';
import {NSInputModule} from 'projects/lib/src/components/input';
import {NSNavModule} from 'projects/lib/src/components/nav';
import {DocumentLayoutComponent} from 'projects/site/src/app/document/layout.component';
import {NSLayoutModule} from "../../../lib/src/components/layout/layout.module";
import {NSDropdownModule} from "../../../lib/src/components/dropdown/dropdown.module";
import {NSNavbarModule} from "../../../lib/src/components/navbar/navbar.module";
import {NSButtonModule} from "../../../lib/src/components/button/button.module";
import {NSMenuModule} from "../../../lib/src/components/menu/menu.module";
import {NSPageModule} from "../../../lib/src/components/page/page.module";


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
