import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExampleComponent} from 'projects/site/src/app/common/example/example.component';


@NgModule({
  declarations: [ExampleComponent],
  exports: [
    ExampleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExampleModule {
}
