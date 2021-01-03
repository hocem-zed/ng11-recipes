import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import {ShoppingListComponent} from './shopping-list.component';
import {MyCommonModule} from '../../shared/my-common/my-common.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ShoppingEditComponent, ShoppingListComponent],
    imports: [
        CommonModule,
        ShoppingListRoutingModule,
        MyCommonModule,
        FormsModule
    ],
  exports: [
    ShoppingListComponent
  ]
})
export class ShoppingListModule { }
