import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

import { ProductsService } from 'src/services/products.service';
import { ProductsInterface } from 'src/types/product.interface';

@Pipe({
  name: 'categoryFilter',
  pure: false,
})
export class CategoryFilterPipe implements PipeTransform {
  transform(
    products: ProductsInterface[],
    filter: { category: string }
  ): ProductsInterface[] {
    if (!products || !filter) {
      return products;
    }
    return products.filter(
      (products): boolean => products.category === filter.category
    );
  }
}

@Component({
  selector: 'app-products-lists',
  templateUrl: './products-lists.component.html',
  styleUrls: ['./products-lists.component.css'],
})
export class ProductsListsComponent implements OnInit {
  products!: ProductsInterface[];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.productsSubject.subscribe({
      next: (products): ProductsInterface[] => (this.products = products),
    });
  }
}
