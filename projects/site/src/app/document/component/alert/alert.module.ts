import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertComponent} from './alert.component';
import {NsDemoAlertBasicComponent} from 'projects/lib/src/alert/demo/basic.component';
import {NSAlertModule} from 'projects/lib/src/alert';
import {RouterModule} from '@angular/router';
import {DocumentModule} from 'projects/site/src/app/common/document/document.module';
import {NsDemoAlertSecondComponent} from 'projects/lib/src/alert/demo/second.component';


@NgModule({
  declarations: [AlertComponent, NsDemoAlertBasicComponent, NsDemoAlertSecondComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AlertComponent
      }
    ]),
    NSAlertModule,
    DocumentModule,
  ]
})
export class AlertModule {
}
