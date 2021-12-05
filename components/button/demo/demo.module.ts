import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NSDemoButtonBasicComponent } from './basic';
import {NSButtonModule} from "../button.module";



@NgModule({
  declarations: [NSDemoButtonBasicComponent],
  imports: [
    CommonModule,
    NSButtonModule
  ]
})
export class DemoModule { }
