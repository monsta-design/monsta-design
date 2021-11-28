import {Component, NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DocumentLayoutComponent} from './document/layout.component';
import {DashboardLayoutComponent} from "./dashboard/layout.component";

const routes: Routes = [
  {
    path: 'component',
    component: DocumentLayoutComponent,
    loadChildren: () => import('./document/component/component.module').then(m => m.ComponentModule)
  },
  {
    path: 'layout',
    component: DocumentLayoutComponent,
    loadChildren: () => import('./document/layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: 'page',
    component: DocumentLayoutComponent,
    loadChildren: () => import('./document/page/page.module').then(m => m.PageModule)
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
        loadChildren: () => import('./document/component/container/container.module').then(m => m.ContainerModule)
      },
      // {
      //   path: 'grid',
      //   loadChildren: () => import('./component/grid/grid.module').then(m => m.GridModule)
      // },
      {
        path: 'form',
        loadChildren: () => import('./document/component/form/form.module').then(m => m.FormModule)
      },
      {
        path: 'input',
        loadChildren: () => import('./document/component/input/input.module').then(m => m.InputModule)
      },
      {
        path: 'modal',
        loadChildren: () => import('./document/component/modal/modal.module').then(m => m.ModalModule)
      },
      {
        path: 'alert',
        loadChildren: () => import('./document/component/alert/alert.module').then(m => m.AlertModule)
      },
      {
        path: 'card',
        loadChildren: () => import('./document/component/card/card.module').then(m => m.CardModule)
      },
      {
        path: 'sidebar',
        loadChildren: () => import('./document/component/sidebar/sidebar.module').then(m => m.SidebarModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
