import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSCheckboxComponent} from './checkbox.component';
import {FormsModule} from "@angular/forms";
const Components = [
  NSCheckboxComponent
]

@NgModule({
  declarations: [
    ...Components,
  ],
  exports: [
    ...Components
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class NSCheckboxModule {
}
