import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';


@NgModule({
  declarations: [RecipesComponent, RecipeListComponent, RecipeDetailComponent, RecipeItemComponent],
  imports: [
    CommonModule,
    RecipesRoutingModule
  ],
  exports: [
    RecipesComponent
  ]
})
export class RecipesModule { }
