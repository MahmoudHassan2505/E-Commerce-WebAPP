import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../Models/product';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent{
  @Input() product!:Product;
  
  constructor(private cartServices: CartService){}
  
  addToCart(prod:Product, amount:number){
    this.cartServices.add(prod,amount)
  }

}
