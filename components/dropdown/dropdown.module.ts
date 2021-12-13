import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSDropdownComponent} from './dropdown.component';
import {DropdownItemComponent} from './dropdown-item.component';
import {DropdownDividerComponent} from "./dropdown-divider.component";

const Components = [
  NSDropdownComponent,
  DropdownItemComponent,
  DropdownDividerComponent,
]

@NgModule({
  declarations: [
    ...Components
  ],
  exports: [
    ...Components
  ],
  imports: [
    CommonModule
  ],
})
export class NSDropdownModule {
}
