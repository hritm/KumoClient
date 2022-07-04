import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddressesComponent } from './addresses/addresses.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { PaymentMethodeComponent } from './payment-methode/payment-methode.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'my-orders', component: MyOrdersComponent, pathMatch: 'full' },
  { path: 'wishlist', component: WishlistComponent, pathMatch: 'full' },
  { path: 'profile', component: ProfileInfoComponent, pathMatch: 'full' },
  { path: 'addresses', component: AddressesComponent, pathMatch: 'full' },
  {
    path: 'payment-methode',
    component: PaymentMethodeComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
