import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { CartProduct } from '../../Models/cart-product';
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit , OnDestroy{

  cartItems:CartProduct[] = [];
  totalPrice=0;
  totalPriceSubscribtion!:Subscription;
  constructor(private cartServices:CartService){}

 

  ngOnInit(): void {
    this.cartItems = this.cartServices.getAll();
    this.totalPriceSubscribtion = this.cartServices.getTotalPrice().subscribe(x=>{
      this.totalPrice= x;
    });
  }

  checkout() {
    console.log("Checkout")
    }
    getTotalPrice() {
      
    }
    removeFromCart(item: CartProduct) {
    this.cartServices.remove(item);
    this.cartItems = this.cartServices.getAll();
    console.log(this.cartItems)
    }
  
    ngOnDestroy(): void {
      this.totalPriceSubscribtion.unsubscribe();
    }
}
