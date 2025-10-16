import { Routes } from '@angular/router';

import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'app_one',
    loadComponent: () => loadRemoteModule('app_one', './App').then((m) => m.App),
  },
  {
    path: 'app_two',
    loadComponent: () => loadRemoteModule('app_two', './App').then((m) => m.App),
  },
];
