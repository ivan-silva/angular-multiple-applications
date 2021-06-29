import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'app1',
    loadChildren: () => import('../../projects/app1/src/app/app.module').then(m => m.AppModule)},
  {path: 'app2',
    loadChildren: () => import('../../projects/app2/src/app/app.module').then(m => m.AppModule)},
  { path: '', redirectTo: 'app1', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
