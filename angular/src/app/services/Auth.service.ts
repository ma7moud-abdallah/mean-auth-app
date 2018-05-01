import { Injectable } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import { JwtHelperService } from '@auth0/angular-jwt';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map'


@Injectable()
export class AuthService {
  
  token
  user

  constructor(
    private jwtHelper: JwtHelperService,
    private fmservice:FlashMessagesService,
    private http:HttpClient
  ) { }

   
 register(user){
   
  return this.http.post('users/register',user).toPromise()
  
 }


 authanticate(user){
  
  return this.http.post('http://localhost:8080/users/authenticate',user).toPromise()
 }


 getProfile(){
  let token = localStorage.getItem('id_token')
  let headers : HttpHeaders = new HttpHeaders()
  headers = headers.append('Content-Type', 'application/json');
  headers = headers.append('Authorization' , token)
  return this.http.get('http://localhost:8080/users/profile',{headers:headers}).toPromise()
 }


loggedIn() {
     this.loadToken()
     return !this.jwtHelper.isTokenExpired(this.token);
    
}


 storeUser(token,user){
  localStorage.setItem('id_token',token)
  localStorage.setItem('user',JSON.stringify(user))
 
  this.token = token
  this.user = user
 }


 private loadToken(){
   let token = this.jwtHelper.tokenGetter()
   this.token = token
 }

 logout(){
   this.token=null
   this.user = null
   localStorage.clear()
 }
 

}
