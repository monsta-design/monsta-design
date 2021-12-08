import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NsRowComponent} from './row.component';
import {NsColComponent} from './col.component';
import {ContainerComponent} from './container.component';
import {MarginDirectives} from './directives/margin.directive';
import {PaddingDirectives} from './directives/padding.directive';
import {GutterDirectives} from './directives/gutter.directive'
import {SizeDirectives} from "./directives/size.directive";
import {PositionDirectives} from "./directives/position.directive";
import {SpaceDirectives} from "./directives/space.directive";
import {DisplayDirectives} from "./directives/display.directive";
import {FlexDirectives} from "./directives/flex.directive";
import {NSLayoutComponent} from './layout.component';
import { NSHeaderComponent } from './header.component';
import { NSAsideComponent } from './aside.component';
import { NSFooterComponent } from './footer.component';
import { NSContentComponent } from './content.component';

const COMPONENTS = [
  NsRowComponent,
  NsColComponent,
  ContainerComponent,
  NSLayoutComponent,
  ...MarginDirectives,
  ...PaddingDirectives,
  ...GutterDirectives,
  ...SizeDirectives,
  ...PositionDirectives,
  ...SpaceDirectives,
  ...DisplayDirectives,
  ...FlexDirectives,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    NSHeaderComponent,
    NSAsideComponent,
    NSFooterComponent,
    NSContentComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS,
    NSAsideComponent,
    NSHeaderComponent,
    NSFooterComponent,
    NSContentComponent
  ]
})
export class NSLayoutModule {
}
