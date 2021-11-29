import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card.component';
import {NSDemoCardBasicComponent} from '@components/card/demo/basic.component';
import {RouterModule} from '@angular/router';
import {NSCardModule} from '@components/card/card.module';
import {NSAlertModule} from '@components/alert';

@NgModule({
  declarations: [CardComponent, NSDemoCardBasicComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: CardComponent
    }]),
    NSCardModule,
    NSAlertModule
  ]
})
export class CardModule {
}
