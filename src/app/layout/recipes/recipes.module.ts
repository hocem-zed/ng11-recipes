import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import {MyCommonModule} from '../../shared/my-common/my-common.module';
import { RecipeSelectComponent } from './recipe-select/recipe-select.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeSelectComponent,
    RecipeEditComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    MyCommonModule
  ],
  exports: [
    RecipesComponent
  ]
})
export class RecipesModule { }
