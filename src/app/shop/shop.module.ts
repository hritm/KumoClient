import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopGridComponent } from './shop-grid/shop-grid.component';
import { ShopListComponent } from './shop-list/shop-list.component';

@NgModule({
  declarations: [
    ShopComponent,
    ProductComponent,
    CartComponent,
    CheckoutComponent,
    ShopGridComponent,
    ShopListComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
