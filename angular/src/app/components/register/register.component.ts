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
  user:any={}
  constructor(
    private validat:ValidateService,
    private register:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  async onSubmit(){
     this.validat.validate(this.user)
     this.validat.validateEmail(this.user.email)
     this.user = await this.register.register(this.user)
       if(this.user.success){
         console.log(this.user.msg)
         this.router.navigate(['/login'])
       }else{
        console.log(this.user.msg)
       }
     

     
  }

}
