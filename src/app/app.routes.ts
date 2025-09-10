import { Routes } from '@angular/router';

export const routes: Routes = [

  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login')
  },
  {
    path: 'layout',
    loadComponent: () => import('./pages/layout/layout'),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home')
      },
      {
        path: 'catalogo',
        loadComponent: () => import('./pages/catalogo/catalogo')
      }
    ]
  },


];
