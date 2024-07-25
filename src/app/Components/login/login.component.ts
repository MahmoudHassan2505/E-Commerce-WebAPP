import { Component } from '@angular/core';
import { AuthenticationService } from '../../Services/authentication.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../Services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authServices:AuthenticationService, private router:Router,private localStorage:LocalStorageService) {}



  login(username:string,password:string){
    console.log("auth")
    if (username == '' || password == ''){
      console.log("Errors")
    }else{
      
      console.log(this.authServices.login(username,password)) 
    }
    if(this.localStorage.get("status") == "logged"){
      this.router.navigate(["/main/home"]);
    }
  
  }

}
