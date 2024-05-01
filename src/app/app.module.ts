import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';
import { SaleoffComponent } from './features/saleoff/saleoff.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { SidebarMenuComponent } from './features/sidebar-menu/sidebar-menu.component';
import { MainContentComponent } from './features/main-content/main-content.component';
import { FlashSalesComponent } from './features/flash-sales/flash-sales.component';
import { PolicyComponent } from './features/policy/policy.component';
import { CountdownComponent } from './features/countdown/countdown.component';
import { CategoriesComponent } from './features/categories/categories.component';
import { BestSellingComponent } from './features/best-selling/best-selling.component';
import { OurProductsComponent } from './features/our-products/our-products.component';
import { FeaturedComponent } from './features/featured/featured.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AppComponent,
    SaleoffComponent,
    ContactPageComponent,
    AboutPageComponent,
    SigninPageComponent,
    SidebarMenuComponent,
    MainContentComponent,
    FlashSalesComponent,
    PolicyComponent,
    CountdownComponent,
    CategoriesComponent,
    BestSellingComponent,
    OurProductsComponent,
    FeaturedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
