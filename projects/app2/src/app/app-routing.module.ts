import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {View1Component} from './view1/view1.component';
import {View2Component} from './view2/view2.component';

export const app2Routes: Routes = [
  { path: '', redirectTo: 'one', pathMatch: 'prefix' },
  { path: 'one', component: View1Component },
  { path: 'two', component: View2Component },
  // TODO: These are non-standalone specifics.
  { path: 'app2/one', redirectTo: 'one', pathMatch: 'prefix' },
  { path: 'app2/two', redirectTo: 'two', pathMatch: 'prefix' }
];

@NgModule({
  imports: [RouterModule.forChild(app2Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
