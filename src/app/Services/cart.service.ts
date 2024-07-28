import { Injectable } from '@angular/core';
import { Product } from '../Models/product';
import { CartProduct } from '../Models/cart-product';
import { BehaviorSubject, distinctUntilChanged, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartProducts:CartProduct[] = [];
  totalPrice:number = 0;


  private itemCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(this.cartProducts.length);
  private totalPriceSubject: BehaviorSubject<number> = new BehaviorSubject<number>(this.totalPrice);

  constructor() { }

  getAll():CartProduct[]{
    return this.cartProducts;
  }

  add(prod: Product , amount:number){
    let flag:boolean = true;
    this.cartProducts.forEach(x=>{
      if(x.product.id == prod.id){
        x.amount+=amount
        flag = false;
      }
    })
   if(flag){
    this.cartProducts.push({
      product: prod,
      amount: amount
    });
   }
    this.totalPrice += amount * prod.price
    this.updateItemCountAndPrice();
  } 

  remove(cartItem:CartProduct){
    this.totalPrice = this.totalPrice - (cartItem.amount * cartItem.product.price);
    this.cartProducts = this.cartProducts.filter(item => item.product.id !== cartItem.product.id);
    this.updateItemCountAndPrice();
  }

  getItemCount():Observable<number>{
    return this.itemCountSubject.asObservable().pipe(distinctUntilChanged());
  }

  getTotalPrice():Observable<number>{
    return this.totalPriceSubject.asObservable().pipe(distinctUntilChanged());
  }

  private updateItemCountAndPrice(): void {
    this.itemCountSubject.next(this.cartProducts.length);
    this.totalPriceSubject.next(this.totalPrice);
  }
}
