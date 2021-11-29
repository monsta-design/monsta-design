import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './input.component';
import {RouterModule} from '@angular/router';
import {DocumentModule} from 'projects/site/src/app/common/document/document.module';
import {NsDemoInputBasicComponent} from 'projects/lib/src/input/demo/basic.component';
import {ExampleModule} from 'projects/site/src/app/common/example/example.module';
import {NSInputModule} from 'projects/lib/src/input';

@NgModule({
  declarations: [
    InputComponent,
    NsDemoInputBasicComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: InputComponent,
      }
    ]),
    NSInputModule,
    DocumentModule,
    ExampleModule
  ],
})
export class InputModule {
}
