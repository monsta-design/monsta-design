import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutComponent} from './layout.component';
import {NSMenuModule} from "@components/menu";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {NSClientDetectorModule} from "@components/client-detector";


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NSMenuModule,
    FormsModule,
    HttpClientModule,
    NSClientDetectorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
