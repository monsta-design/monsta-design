import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSLayoutComponent} from './layout.component';
import {NSSiderComponent} from './sider.component';
import {NSHeaderComponent} from './header.component';
import {NSFooterComponent} from './footer.component';
import {NSSiderTriggerComponent} from './sider-trigger.component';
import {NSContentComponent} from './content.component';

@NgModule({
  declarations: [
    NSLayoutComponent,
    NSSiderComponent,
    NSSiderTriggerComponent,
    NSHeaderComponent,
    NSContentComponent,
    NSFooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NSLayoutComponent,
    NSSiderComponent,
    NSHeaderComponent,
    NSContentComponent,
    NSFooterComponent
  ]
})
export class NSLayoutModule {
}
