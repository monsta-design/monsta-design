import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AlertComponent} from './alert.component';

import {NSAlertModule} from '../../../../../components/alert';
import {NsDemoAlertBasicComponent} from '../../../../../components/alert/demo/basic';
import {NsDemoAlertSecondComponent} from '../../../../../components/alert/demo/second';

@NgModule({
  declarations: [
    AlertComponent,
    NsDemoAlertBasicComponent,
    NsDemoAlertSecondComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AlertComponent
      }
    ]),
    NSAlertModule,
  ]
})
export class AlertModule {
}
