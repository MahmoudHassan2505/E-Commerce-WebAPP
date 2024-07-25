import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  username:string = "Admin"
  password:string = "Admin"
  
  constructor() { }
  
  login(username:string, password:string):boolean{

    if(this.username == username && this.password == password){
      return true;
    }
    
    return false;
  }
}
