import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NSDemoButtonBasicComponent } from './basic';
import {NSButtonModule} from "../button.module";
import {NSDemoButtonSizeComponent} from "./size";



@NgModule({
  declarations: [
    NSDemoButtonBasicComponent,
    NSDemoButtonSizeComponent,
  ],
  imports: [
    CommonModule,
    NSButtonModule
  ]
})
export class DemoModule { }
