import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FruitListComponent } from './fruit-list/fruit-list.component';

const routes: Routes = [
  {path: "", redirectTo: "/fruits", pathMatch: "full"},
  { path: 'fruits', component: FruitListComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
