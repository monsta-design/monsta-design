import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './modal.component';
import {RouterModule} from '@angular/router';
// import {NsDemoModalBasicInputComponent} from 'lib/src/modal/demo/basic.component';
// import {NSModalModule} from 'lib/src/modal/modal.module';
// import {DocumentModule} from 'src/site/src/app/common/document/document.module';
// import {NSButtonModule} from 'lib/src/button/button.module';


@NgModule({
  declarations: [
    ModalComponent,
    // NsDemoModalBasicInputComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: ModalComponent
    }]),
    // NSModalModule,
    // DocumentModule,
    // NSButtonModule,
  ]
})
export class ModalModule {
}
