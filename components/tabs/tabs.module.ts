import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSTabsComponent} from './tabs.component';
import {NSTabComponent} from './tab.component';

const Components = [
  NSTabsComponent,
  NSTabComponent,
]

@NgModule({
  declarations: [
    ...Components,
  ],
  exports: [
    ...Components
  ],
  imports: [
    CommonModule
  ]
})
export class NSTabsModule {
}
