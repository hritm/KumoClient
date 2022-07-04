import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { AddressesComponent } from './addresses/addresses.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { PaymentMethodeComponent } from './payment-methode/payment-methode.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AddressesComponent,
    ProfileInfoComponent,
    WishlistComponent,
    MyOrdersComponent,
    PaymentMethodeComponent,
    LoginComponent,
  ],
  imports: [CommonModule, AccountRoutingModule],
  bootstrap: [],
})
export class AccountModule {}
