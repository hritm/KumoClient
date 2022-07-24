import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { BannerComponent } from 'src/app/banner/banner.component';
import { BlogComponent } from 'src/app/blog/blog.component';
import { CartSideNavComponent } from 'src/app/cart-side-nav/cart-side-nav.component';
import { ProductsService } from 'src/services/products.service';
import { CategoryStyleComponent } from './category-style/category-style.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerFeaturesComponent } from './customer-features/customer-features.component';
import { CustomerReviewComponent } from './customer-review/customer-review.component';
import { DealsOfTheDayComponent } from './deals-of-the-day/deals-of-the-day.component';
import { FAQComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InstaPostsComponent } from './insta-posts/insta-posts.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { NewUpdatesComponent } from './new-updates/new-updates.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProductViewModalComponent } from './product-view-modal/product-view-modal.component';
import {
  CategoryFilterPipe,
  ProductsListsComponent
} from './products-lists/products-lists.component';
import { SavedProductsComponent } from './saved-products/saved-products.component';
import { SearchComponent } from './search/search.component';
import { TopScrollComponent } from './top-scroll/top-scroll.component';
import { TopSellerComponent } from './top-seller/top-seller.component';
import { TrendingCategoriesComponent } from './trending-categories/trending-categories.component';
import { TrendingProductsComponent } from './trending-products/trending-products.component';

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
    CategoryFilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
