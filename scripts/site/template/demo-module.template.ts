import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../../share/share.module';
import { moduleList } from './module';

{{imports}}

@NgModule({
  imports     : [
    ShareModule,
    ...moduleList,
    RouterModule.forChild([
      { path: 'en', component: NSDemo{{component}}EnComponent },
      { path: 'zh', component: NSDemo{{component}}ZhComponent }
    ])
  ],
  declarations: [
{{declarations}}
  ],
entryComponents: [
  {{entryComponents}}
]
})
export class NSDemo{{component}}Module {

}
