import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import {MyCommonModule} from '../../shared/my-common/my-common.module';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    MyCommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
