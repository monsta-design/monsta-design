import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DEMO_ROUTES} from './router';
import {LayoutComponent} from "./layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: {
      RoutesTabIgnore: true,
    },
    children: [
      ...DEMO_ROUTES,
      {
        'path': 'docs',
        'loadChildren': () => import('./docs/index.module').then(m => m.NzDocsModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
