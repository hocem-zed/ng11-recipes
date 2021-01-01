import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {HeaderModule} from './header/header.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {RecipesModule} from './recipes/recipes.module';
import {MyCommonModule} from '../shared/my-common/my-common.module';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HeaderModule,
    ShoppingListModule,
    RecipesModule,
    MyCommonModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {
}
