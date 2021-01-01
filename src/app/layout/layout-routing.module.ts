import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout.component';
import {RecipesComponent} from './recipes/recipes.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
