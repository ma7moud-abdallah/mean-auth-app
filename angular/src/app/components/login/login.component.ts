import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/Auth.service';
import { ValidateService } from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any={} 
  constructor(
    private router:Router,
    private login:AuthService,
    private fmservice:FlashMessagesService,
    private validate:ValidateService
  ) { }

  ngOnInit() {
  }

  async authanticate(user){
     
   this.user = await this.login.authanticate(this.user)

   if(this.user.success){
        this.login.storeUser(this.user.token,this.user.user)
        this.fmservice.show('You Are Logged In',{ cssClass: 'alert-success', timeout: 1000 })
        console.log(this.user)
        this.router.navigate(['/dashboard'])
      }else{
        this.fmservice.show(this.user.msg,{ cssClass: 'alert-danger', timeout: 3000 })
        this.router.navigate(['/login'])
      }
      
    }

}
