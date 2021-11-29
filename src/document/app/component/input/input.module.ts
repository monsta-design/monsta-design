import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './input.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    InputComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: InputComponent,
      }
    ]),
  ],
})
export class InputModule {
}
