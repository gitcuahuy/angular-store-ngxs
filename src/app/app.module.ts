import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './containers/product-page.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductsMessageComponent } from './components/products-message/products-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductsTableComponent,
    ProductEditComponent,
    ProductsMessageComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
