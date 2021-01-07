import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout.component';
import {RecipesComponent} from './recipes/recipes.component';
import {AuthComponent} from './auth/auth.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: '', redirectTo: '/recipes', pathMatch: 'full'
      },
      {
        path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)
      },
      {
        path: 'shopping-list', loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule)
      },
      {
        path: 'auth', component: AuthComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
