import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContainerComponent} from './container.component';
import {NSLayoutComponent} from './layout.component';
import {NSLayoutHeaderComponent} from './layout-header.component';
import {NSLayoutAsideComponent} from './layout-aside.component';
import {NSLayoutFooterComponent} from './layout-footer.component';
import {NSLayoutContentComponent} from './layout-content.component';
import {NSSpaceComponent} from './space.component';
import {MarginDirectives} from './directives/margin.directive';
import {PaddingDirectives} from './directives/padding.directive';
import {GutterDirectives} from './directives/gutter.directive'
import {SizeDirectives} from "./directives/size.directive";
import {PositionDirectives} from "./directives/position.directive";
import {SpaceDirectives} from "./directives/align.directive";
import {DisplayDirectives} from "./directives/display.directive";
import {FlexDirectives} from "./directives/flex.directive";
import {FloatDirectives} from "./directives/float.directive";
import {StackDirectives} from "./directives/stack.directive";
import {NSGridDirectives} from "./directives/grid.directive";

const COMPONENTS = [
  ...NSGridDirectives,
  ...MarginDirectives,
  ...PaddingDirectives,
  ...GutterDirectives,
  ...SizeDirectives,
  ...PositionDirectives,
  ...SpaceDirectives,
  ...DisplayDirectives,
  ...FlexDirectives,
  ...FloatDirectives,
  ...StackDirectives,
  ContainerComponent,
  NSLayoutComponent,
  NSLayoutHeaderComponent,
  NSLayoutAsideComponent,
  NSLayoutFooterComponent,
  NSLayoutContentComponent,
  NSSpaceComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class NSLayoutModule {
}
