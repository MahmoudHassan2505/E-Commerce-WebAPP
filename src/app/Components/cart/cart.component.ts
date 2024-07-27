import { Component } from '@angular/core';
import { Product } from '../../Models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartProduct:Product[] = [];
}
