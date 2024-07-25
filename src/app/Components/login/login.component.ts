import { Component } from '@angular/core';
import { AuthenticationService } from '../../Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authServices:AuthenticationService) {}



  login(username:string,password:string){
    console.log("auth")
    if (username == '' || password == ''){
      console.log("Errors")
    }else{
      
      console.log(this.authServices.login(username,password))
    }
  }

}
