import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutRoutingModule} from './layout-routing.module';
import {LayoutComponent} from './layout.component';
import {HeaderModule} from './header/header.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {RecipesModule} from './recipes/recipes.module';
import {MyCommonModule} from '../shared/my-common/my-common.module';
import { AuthComponent } from './auth/auth.component';
import {FormsModule} from '@angular/forms';
import {LoadingSpinnerComponent} from '../shared/loading-spinner/loadingSpinner.component';


@NgModule({
  declarations: [
    LayoutComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HeaderModule,
    ShoppingListModule,
    RecipesModule,
    MyCommonModule,
    FormsModule,

  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {
}
