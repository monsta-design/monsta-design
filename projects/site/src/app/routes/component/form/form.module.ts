import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormComponent} from 'projects/site/src/app/routes/component/form/form.component';
import {RouterModule} from '@angular/router';
import {NSInputModule} from 'projects/lib/src/components/input';
import {ExampleModule} from 'projects/site/src/app/common/example/example.module';
import {DocumentModule} from 'projects/site/src/app/common/document/document.module';


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
    ]),
    ExampleModule,
    DocumentModule
  ]
})
export class FormModule {
}
