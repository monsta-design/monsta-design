import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseComponent } from './collapse.component';
import { NsCollapseBasicComponent } from './demo/basic.component';



@NgModule({
  declarations: [CollapseComponent, NsCollapseBasicComponent],
  imports: [
    CommonModule
  ]
})
export class CollapseModule { }
