import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderModule } from './header/header.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesModule } from './recipes/recipes.module';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HeaderModule,
    ShoppingListModule,
    RecipesModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
