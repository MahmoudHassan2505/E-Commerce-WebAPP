import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalStorageService } from '../../Services/local-storage.service';
import { AuthenticationService } from '../../Services/authentication.service';
import { CartService } from '../../Services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartItemCount: number = 0
  totalPrice: number = 0
  private itemCountSubscription!: Subscription;
  private totalPriceSubscrbtion!: Subscription;
  status: boolean = false;

  constructor(private localStorage: LocalStorageService, private authServices: AuthenticationService, private cartService: CartService) {
    this.status = localStorage.get("status") == "logged"
    
  }

  ngOnInit(): void {
    this.itemCountSubscription = this.cartService.getItemCount().subscribe(count => {
      this.cartItemCount = count;
    });

    this.totalPriceSubscrbtion = this.cartService.getTotalPrice().subscribe( total =>{
      this.totalPrice = total;
    });
  }

  logOut() {
    this.authServices.logOut();
  }

  ngOnDestroy(): void {
    if (this.itemCountSubscription) {
      this.itemCountSubscription.unsubscribe();
    }
    if (this.totalPriceSubscrbtion) {
      this.totalPriceSubscrbtion.unsubscribe();
    }
  }

}