import { Routes } from '@angular/router';
import Home from './components/home/home';
import Login from './components/login/login';

export const routes: Routes = [

  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  { path: 'login',
    title: 'Login',
    component: Login
  },
  { path: 'home',
    title: 'Home',
    component: Home
  },



];
