import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 

  username:string = "Admin"
  password:string = "Admin"
  
  constructor(private localStorage:LocalStorageService) { }
  
  login(username:string, password:string):boolean{

    if(this.username == username && this.password == password){
      this.localStorage.set("status","logged");
    }
    
    return false;
  }
  logOut() {
    this.localStorage.remove("status");
  }
}
