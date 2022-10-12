import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { products } from '../products/products';
import { IProducts } from '../products/iproducts';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products: Array<IProducts> = products;

product: IProducts = {} as IProducts;
  id: number = 0;
  constructor(
    private route: ActivatedRoute,
  private cartService: CartService
  ) { }

  addToCart() {
    alert('Your product has been added to the cart!');
    this.cartService.addToCart(this.product);
  }  

  ngOnInit(): void {
  }

}
