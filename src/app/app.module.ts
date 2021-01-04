import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MyCommonModule} from './shared/my-common/my-common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    MyCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
