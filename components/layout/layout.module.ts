import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NsRowComponent} from './row.component';
import {NsColComponent} from './col.component';
import {ContainerComponent} from './container.component';
import {FlexBoxComponent} from './flex-box.component';
import {FlexItemComponent} from './flex-item.component';
import {MarginDirectives} from './directives/margin.directive';
import {PaddingDirectives} from './directives/padding.directive';
import {GutterDirectives} from './directives/gutter.directive'
import {BGDirective} from "./directives/background.directive";
import {HDirective, WDirective} from "./directives/size.directive";
import {PositionDirectives} from "./directives/position.directive";
import {TextDirectives} from "./directives/text.directive";

const COMPONENTS = [
  NsRowComponent,
  NsColComponent,
  ContainerComponent,
  FlexBoxComponent,
  FlexItemComponent,
  ...MarginDirectives,
  ...PaddingDirectives,
  ...GutterDirectives,
  BGDirective,
  WDirective,
  HDirective,
  ...PositionDirectives,
  ...TextDirectives,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
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
