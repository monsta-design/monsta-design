import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DEMO_ROUTES} from './router';
import {LayoutComponent} from "./layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      ...DEMO_ROUTES,
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
