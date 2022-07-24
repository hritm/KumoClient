import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from 'src/app/about/about.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { FAQComponent } from 'src/app/faq/faq.component';
import { HomeComponent } from 'src/app/home/home.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { PrivacyComponent } from 'src/app/privacy/privacy.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '' },
  {
    path: 'shop',
    loadChildren: () =>
      import('./shop/shop.module').then((module) => module.ShopModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then((module) => module.AccountModule),
  },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'faq', component: FAQComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
       scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
