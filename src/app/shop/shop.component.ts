import { Component } from '@angular/core';

enum ShopStyle{
  Grid,
  list
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  shopStyle: ShopStyle = ShopStyle.Grid;

  showGrid() {
    this.shopStyle = ShopStyle.Grid;
  }

  showList() {
    this.shopStyle = ShopStyle.list
  }
}
