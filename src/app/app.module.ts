import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { HeaderComponent } from './Components/header/header.component';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { LandingComponent } from './Components/landing/landing.component';
import { TrendingComponent } from './Components/trending/trending.component';
import { ShopComponent } from './Components/shop/shop.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './Components/product-card/product-card.component';
import { CartComponent } from './Components/cart/cart.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainLayoutComponent,
    HeaderComponent,
    SearchBarComponent,
    HomeComponent,
    LandingComponent,
    TrendingComponent,
    ShopComponent,
    ProductCardComponent,
    CartComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
