import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DocumentLayoutComponent} from './layout.component';
import {DashboardLayoutComponent} from "./dashboard/layout.component";

const routes: Routes = [
  {
    path: 'component',
    component: DocumentLayoutComponent,
    loadChildren: () => import('./component/component.module').then(m => m.ComponentModule)
  },
  {
    path: 'layout',
    component: DocumentLayoutComponent,
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: 'page',
    component: DocumentLayoutComponent,
    loadChildren: () => import('./page/page.module').then(m => m.PageModule)
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'components',
    component: DocumentLayoutComponent,
    children: [
      {
        path: 'container',
        loadChildren: () => import('./component/container/container.module').then(m => m.ContainerModule)
      },
      // {
      //   path: 'grid',
      //   loadChildren: () => import('./component/grid/grid.module').then(m => m.GridModule)
      // },
      {
        path: 'form',
        loadChildren: () => import('./component/form/form.module').then(m => m.FormModule)
      },
      {
        path: 'input',
        loadChildren: () => import('./component/input/input.module').then(m => m.InputModule)
      },
      {
        path: 'modal',
        loadChildren: () => import('./component/modal/modal.module').then(m => m.ModalModule)
      },
      {
        path: 'alert',
        loadChildren: () => import('./component/alert/alert.module').then(m => m.AlertModule)
      },
      {
        path: 'card',
        loadChildren: () => import('./component/card/card.module').then(m => m.CardModule)
      },
      {
        path: 'sidebar',
        loadChildren: () => import('./component/sidebar/sidebar.module').then(m => m.SidebarModule)
      }
    ]
  },
  {
    path: '*',
    redirectTo: 'component/menu'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
