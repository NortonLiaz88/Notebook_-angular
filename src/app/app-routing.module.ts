import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//https://www.techiediaries.com/angular-lazy-load-module-example/
const routes: Routes = [
  { path: 'entries', loadChildren: () => import ('./pages/entries/entries.module').then(m => m.EntriesModule)},
  { path: 'categories', loadChildren: () => import ('./pages/categories/categories.module').then(m => m.CategoriesModule) }
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
