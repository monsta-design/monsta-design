import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSFormComponent} from './form.component';
import { FormControlComponent } from './form-control.component';


@NgModule({
  declarations: [
    NSFormComponent,
    FormControlComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NSFormComponent,
  ]
})
export class NSFormModule {
}
