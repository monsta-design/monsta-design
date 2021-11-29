import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card.component';
import {NSDemoCardBasicComponent} from 'projects/lib/src/card/demo/basic.component';
import {RouterModule} from '@angular/router';
import {DocumentModule} from 'projects/site/src/app/common/document/document.module';
import {NSCardModule} from 'projects/lib/src/card/card.module';
import {NSAlertModule} from 'projects/lib/src/alert';


@NgModule({
  declarations: [CardComponent, NSDemoCardBasicComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: CardComponent
    }]),
    DocumentModule,
    NSCardModule,
    NSAlertModule
  ]
})
export class CardModule {
}
