import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import {ShoppingListComponent} from './shopping-list.component';


@NgModule({
  declarations: [ShoppingListEditComponent, ShoppingListComponent],
  imports: [
    CommonModule,
    ShoppingListRoutingModule
  ],
  exports: [
    ShoppingListComponent
  ]
})
export class ShoppingListModule { }
