import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentComponent, ExampleComponentDirective} from './document.component';
import {ExampleModule} from '../example/example.module';


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
