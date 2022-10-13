import { Injectable } from '@angular/core';
import { IProducts } from './products/iproducts';
import { products } from './products/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Array<IProducts> = [];
  

  constructor() { }

  addToCart(product:IProducts) {
    this.items.push(product);
  }

  getItems() {
    return this.items;  
  }
  clearCart () {
    this.items = [];
    return this.items;
  }
  getTotal(){
    let total : number = 0;
    for(let item of this.items){
      total += item.price * item.quantity;
    }
    return total;
  }


}
