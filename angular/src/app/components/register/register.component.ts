import { AuthService } from '../../services/Auth.service';
import { ValidateService } from '../../services/validate.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User={name:"",email:"",username:"",password:""}
  constructor(
    private validat:ValidateService,
    private register:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onSubmit(user){
     this.validat.validate(this.user)
     this.validat.validateEmail(user.email)
     this.register.register(user)
     .subscribe(res =>{
       if(res.success){
         console.log(res.msg)
         this.router.navigate(['/login'])
       }else{
        console.log(res.msg)
       }
     })

     
  }

}
