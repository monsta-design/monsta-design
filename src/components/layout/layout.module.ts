import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NsRowComponent} from './row.component';
import {NsColComponent} from './col.component';
import { ContainerComponent } from './container.component';
import { FlexBoxComponent } from './flex-box.component';
import { FlexItemComponent } from './flex-item.component';

const COMPONENTS = [
  NsRowComponent,
  NsColComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ContainerComponent,
    FlexBoxComponent,
    FlexItemComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class NSLayoutModule {
}
