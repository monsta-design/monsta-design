import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSDropdownComponent} from './dropdown.component';
import { DropdownItemComponent } from './dropdown-item.component';


@NgModule({
  declarations: [NSDropdownComponent, DropdownItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NSDropdownComponent,
    DropdownItemComponent
  ]
})
export class NSDropdownModule {
}
