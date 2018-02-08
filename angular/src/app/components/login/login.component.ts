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
  user:User={name:"",email:"",username:"",password:""} 
  constructor(
    private router:Router,
    private login:AuthService,
    private fmservice:FlashMessagesService,
    private validate:ValidateService
  ) { }

  ngOnInit() {
  }

  authanticate(user){
     
    this.login.authanticate(this.user)
    .subscribe(res=>{
      if(res.success){
        this.login.storeUser(res.token,res.user)
        this.fmservice.show('You Are Logged In',{ cssClass: 'alert-success', timeout: 1000 })
        this.router.navigate(['/dashboard'])
      }else{
        this.fmservice.show(res.msg,{ cssClass: 'alert-danger', timeout: 3000 })
        this.router.navigate(['/login'])
      }
      
    })
    }

}
