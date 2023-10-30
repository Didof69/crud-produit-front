import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { FormsModule } from '@angular/forms';
import { ProductDeleteComponent } from './components/product-delete/product-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    NavbarComponent,
    ProductCardComponent,
    ProductListComponent,
    PageNotFoundComponent,
    LoginComponent,
    ProductUpdateComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
