import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './modal.component';
import {RouterModule} from '@angular/router';
import {NsDemoModalBasicInputComponent} from 'projects/lib/src/modal/demo/basic.component';
import {NSModalModule} from 'projects/lib/src/modal/modal.module';
import {DocumentModule} from 'projects/site/src/app/common/document/document.module';
import {NSButtonModule} from 'projects/lib/src/button/button.module';


@NgModule({
  declarations: [
    ModalComponent,
    NsDemoModalBasicInputComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: ModalComponent
    }]),
    NSModalModule,
    DocumentModule,
    NSButtonModule,
  ]
})
export class ModalModule {
}
