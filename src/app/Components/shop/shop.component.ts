import { Component } from '@angular/core';
import { Product } from '../../Models/product';
import { ProductService } from '../../Services/product.service';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

  products: Product[] = [];

  constructor(private prodService:ProductService){

  }

  ngOnInit(): void {
    this.prodService.getAll().subscribe(x=>{
      this.products = x;
    });
  }


}
