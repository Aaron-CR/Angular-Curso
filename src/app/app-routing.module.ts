import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'first-component',
    loadChildren: () => import('./first/first.module').then(m => m.FirstModule)
  },
  {
    path: 'second-component',
    loadChildren: () => import('./second/second.module').then(m => m.SecondModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  },
  { path: '', redirectTo: 'first-component', pathMatch: 'full' }, // Redirigir a `first-component`
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' } // Redirigir a la página 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
