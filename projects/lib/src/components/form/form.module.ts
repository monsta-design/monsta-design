import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSFormComponent} from 'projects/lib/src/components/form/form.component';
import { FormControlComponent } from 'projects/lib/src/components/form/form-control.component';


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
