import { Component } from '@angular/core';
import { LocalStorageService } from '../../Services/local-storage.service';
import { AuthenticationService } from '../../Services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  status:boolean=false;

  constructor(private localStorage:LocalStorageService, private authServices:AuthenticationService){
    this.status = localStorage.get("status") =="logged"
    console.log(this.status)
  }

  logOut() {
    this.authServices.logOut();
    }
}
