import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { CartItems } from '../models/cartItems';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product)
  {
    let item = CartItems.find(c=>c.product.categoryId===product.productId);
    if(item){
      item.quantity +=1;
    }else{
      let cartItem= new CartItem();
      cartItem.product=product;
      cartItem.quantity = 1 ;
      CartItems.push(cartItem)
    }
  }

  removeFromCard(product:Product){
    let item:CartItem = CartItems.find(c=>c.product.categoryId===product.productId);
    CartItems.splice(CartItems.indexOf(item),1);
  }

  list():CartItem[]{
    return CartItems;
  }
}
