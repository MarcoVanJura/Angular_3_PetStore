import { Component, OnInit } from '@angular/core';
import { products } from '../products/products';
import { IProducts } from '../products/iproducts';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products:IProducts [] = products;

constructor(
  private cartService: CartService
  ) { }

  addToCart(product: IProducts) {
    alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }  

  ngOnInit(): void {
  }
}
