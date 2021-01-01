import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipesComponent} from './recipes.component';
import {RecipeSelectComponent} from './recipe-select/recipe-select.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';

const routes: Routes = [
  {
    path: '', component: RecipesComponent,
    children: [
      { path: '', component: RecipeSelectComponent},
      { path: 'new', component: RecipeEditComponent},
      { path: ':id', component: RecipeDetailComponent},
      { path: ':id/edit', component: RecipeEditComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
