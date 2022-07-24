import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ProductsInterface } from 'src/types/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsSubject$: BehaviorSubject<ProductsInterface[]> = new BehaviorSubject<ProductsInterface[]>([
    {
      id: 1,
      imageUrl: 'assets/img/product/2.jpg',
      name: 'Striped Shirt Dress',
      price: '$99 - $129',
      category: 'Women',
      productUrl: '/shop/product',
      badge: 'Hot',
      badgeBackground: 'warning',
    },
    {
      id: 2,
      imageUrl: 'assets/img/product/10.jpg',
      name: 'Striped Shirt Dress',
      price: '$99 - $129',
      category: 'Men',
      productUrl: '/shop/product',
      badge: undefined,
      badgeBackground: undefined,
    },
    {
      id: 3,
      imageUrl: 'assets/img/product/11.jpg',
      name: 'Striped Shirt Dress',
      price: '$99 - $129',
      category: 'Men',
      productUrl: '/shop/product',
      badge: 'New',
      badgeBackground: 'info',
    },
    {
      id: 4,
      imageUrl: 'assets/img/product/6.jpg',
      name: 'Striped Shirt Dress',
      price: '$99 - $129',
      category: 'Women',
      productUrl: '/shop/product',
      badge: 'Sale',
      badgeBackground: 'danger',
    },
    {
      id: 5,
      imageUrl: 'assets/img/product/7.jpg',
      name: 'Striped Shirt Dress',
      price: '$99 - $129',
      category: 'Women',
      productUrl: '/shop/product',
      badge: 'Hot',
      badgeBackground: 'warning',
    },
    {
      id: 6,
      imageUrl: 'assets/img/product/3.jpg',
      name: 'Striped Shirt Dress',
      price: '$99 - $129',
      category: 'Kids',
      productUrl: '/shop/product',
      badge: 'sale',
      badgeBackground: 'info',
    },
    {
      id: 7,
      imageUrl: 'assets/img/product/9.jpg',
      name: 'Striped Shirt Dress',
      price: '$99 - $129',
      category: 'Women',
      productUrl: '/shop/product',
      badge: 'Best Seller',
      badgeBackground: 'danger',
    },
    {
      id: 8,
      imageUrl: 'assets/img/product/6.jpg',
      name: 'Striped Shirt Dress',
      price: '$99 - $129',
      category: 'Kids',
      productUrl: '/shop/product',
      badge: 'sale',
      badgeBackground: 'info',
    },
    {
      id: 9,
      imageUrl: 'assets/img/product/13.jpg',
      name: 'Striped Shirt Dress',
      price: '$99 - $129',
      category: 'Men',
      productUrl: '/shop/product',
      badge: 'New',
      badgeBackground: 'info',
    },
    {
      id: 10,
      imageUrl: 'assets/img/product/14.jpg',
      name: 'Striped Shirt Dress',
      price: '$99 - $129',
      category: 'Men',
      productUrl: '/shop/product',
      badge: 'New',
      badgeBackground: 'info',
    },
    {
      id: 10,
      imageUrl: 'assets/img/product/20.png',
      name: 'Striped Shirt Dress',
      price: '$99 - $129',
      category: 'Kids',
      productUrl: '/shop/product',
      badge: 'New',
      badgeBackground: 'info',
    },
    {
      id: 10,
      imageUrl: 'assets/img/product/21.png',
      name: 'Striped Shirt Dress',
      price: '$99 - $129',
      category: 'Kids',
      productUrl: '/shop/product',
      badge: 'New',
      badgeBackground: 'info',
    },
  ]);

  get productsSubject(): BehaviorSubject<ProductsInterface[]> {
    return this.productsSubject$;
  }
}
