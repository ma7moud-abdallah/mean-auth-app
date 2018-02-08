import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './Auth.service';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router:Router,private auth:AuthService) { }
  canActivate(){
    if(this.auth.loggedIn()){
      return true
      
    }else{
      this.router.navigate(['/login'])
      return false
    }
  }
}
