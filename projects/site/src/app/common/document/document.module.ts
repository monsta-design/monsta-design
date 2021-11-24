import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentComponent, ExampleComponentDirective} from 'projects/site/src/app/common/document/document.component';
import {ExampleModule} from 'projects/site/src/app/common/example/example.module';


@NgModule({
  declarations: [DocumentComponent, ExampleComponentDirective],
  exports: [
    DocumentComponent
  ],
  imports: [
    CommonModule,
    ExampleModule
  ]
})
export class DocumentModule {
}
