import {ModuleWithProviders, NgModule} from '@angular/core';
import {GLOBALS} from './globals';
import {NSSortableDirective} from './sortable.directive';
import {Options} from 'sortablejs';

@NgModule({
  declarations: [
    NSSortableDirective
  ],
  exports: [
    NSSortableDirective
  ],
})
export class NSSortableModule {

  public static forRoot(globalOptions: Options): ModuleWithProviders<NSSortableModule> {
    return {
      ngModule: NSSortableModule,
      providers: [
        {provide: GLOBALS, useValue: globalOptions},
      ],
    };
  }

}
