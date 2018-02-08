import { Injectable } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import { tokenNotExpired } from 'angular2-jwt';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class AuthService {
  
  token
  user

  constructor(
    private fmservice:FlashMessagesService,
    private http:Http
  ) { }


 register(user){
 return this.http.post('users/register',user)
  .map(res=>{
    this.fmservice.show('user registerd',{ cssClass: 'alert-success', timeout: 1000 })
    return res.json()

  })
 }


 authanticate(user){
  
  return this.http.post('users/authenticate',user)
  .map(res=>{
    return res.json()
  })
 }


 getProfile(){
  let headers = new Headers()
  this.loadToken()
  headers.append('Authorization',this.token)
  return this.http.get('users/profile',{headers:headers})
  .map(res=> res.json())
 }


loggedIn() {
  return tokenNotExpired('id_token');
}


 storeUser(token,user){
  localStorage.setItem('id_token',token)
  localStorage.setItem('user',JSON.stringify(user))
 
  this.token = token
  this.user = user
 }


 private loadToken(){
   let token = localStorage.getItem('id_token')
   this.token = token
 }

 logout(){
   this.token=null
   this.user = null
   localStorage.clear()
 }
 

}
