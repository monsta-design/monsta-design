import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContainerComponent} from './container.component';
import {NSLayoutComponent} from './layout.component';
import {NSHeaderComponent} from './header.component';
import {NSAsideComponent} from './aside.component';
import {NSFooterComponent} from './footer.component';
import {NSContentComponent} from './content.component';
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
  NSHeaderComponent,
  NSAsideComponent,
  NSFooterComponent,
  NSContentComponent,
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
