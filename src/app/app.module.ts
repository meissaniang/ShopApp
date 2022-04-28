import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ContainerComponent } from './component/container/container.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductComponent } from './component/product/product.component';
import { ProductListComponent } from './component/product/product-list/product-list.component';
import { ProductItemComponent } from './component/product/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    ProductComponent,
    ProductListComponent,
    ProductItemComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
