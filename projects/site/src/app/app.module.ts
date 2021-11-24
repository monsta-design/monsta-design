import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {DocumentComponent} from 'projects/site/src/app/routes/document.component';

import {NSFormModule} from 'projects/lib/src/components/form';
import {NSInputModule} from 'projects/lib/src/components/input';
import {NSNavModule} from 'projects/lib/src/components/nav';
import {NSLayoutModule} from 'projects/lib/src/components/layout';
import {NSMenuModule} from 'projects/lib/src/components/menu';
import { ComponentComponent } from 'projects/site/src/app/routes/component.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    ComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NSFormModule,
    NSInputModule,
    NSNavModule,
    NSLayoutModule,
    NSMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
