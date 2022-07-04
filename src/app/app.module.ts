import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DealsOfTheDayComponent } from './deals-of-the-day/deals-of-the-day.component';
import { CustomerReviewComponent } from './customer-review/customer-review.component';
import { CustomerFeaturesComponent } from './customer-features/customer-features.component';
import { FooterComponent } from './footer/footer.component';
import { InstaPostsComponent } from './insta-posts/insta-posts.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { CategoryStyleComponent } from './category-style/category-style.component';
import { ProductsListsComponent } from './products-lists/products-lists.component';
import { ProductViewModalComponent } from './product-view-modal/product-view-modal.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { SearchComponent } from './search/search.component';
import { TopScrollComponent } from './top-scroll/top-scroll.component';
import { SavedProductsComponent } from './saved-products/saved-products.component';
import { CartSideNavComponent } from './cart-side-nav/cart-side-nav.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TrendingProductsComponent } from './trending-products/trending-products.component';
import { TrendingCategoriesComponent } from './trending-categories/trending-categories.component';
import { NewUpdatesComponent } from './new-updates/new-updates.component';
import { TopSellerComponent } from './top-seller/top-seller.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FAQComponent } from './faq/faq.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    DealsOfTheDayComponent,
    CustomerReviewComponent,
    CustomerFeaturesComponent,
    FooterComponent,
    InstaPostsComponent,
    HeaderComponent,
    BannerComponent,
    CategoryStyleComponent,
    ProductsListsComponent,
    ProductViewModalComponent,
    LoginModalComponent,
    SearchComponent,
    TopScrollComponent,
    SavedProductsComponent,
    CartSideNavComponent,
    HomeComponent,
    ContactComponent,
    TrendingProductsComponent,
    TrendingCategoriesComponent,
    NewUpdatesComponent,
    TopSellerComponent,
    PrivacyComponent,
    PageNotFoundComponent,
    FAQComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
