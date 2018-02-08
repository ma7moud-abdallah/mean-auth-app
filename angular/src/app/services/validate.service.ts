import { Injectable } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';

@Injectable()
export class ValidateService {

  constructor( private FlashMessage:FlashMessagesService) { }

  validate(user){
   if(user.name== undefined ||user.username== undefined ||user.password== undefined || user.email== undefined){
     this.FlashMessage.show('please fill the all fileds',{ cssClass: 'alert-success', timeout: 3000 })
   }
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email)){
      this.FlashMessage.show('please type a valid email ',{ cssClass: 'alert-success', timeout: 3000 })
    }
}

 

}
