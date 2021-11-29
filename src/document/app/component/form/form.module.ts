import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormComponent} from './form.component';
import {RouterModule} from '@angular/router';
import {NSInputModule} from '@components/input';


@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    NSInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: FormComponent,
      }
    ])
  ]
})
export class FormModule {
}
