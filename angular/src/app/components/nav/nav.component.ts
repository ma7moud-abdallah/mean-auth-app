import { AuthService } from '../../services/Auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    public auth:AuthService,
    private router:Router,
    private fmservice:FlashMessagesService
  ) { }

  ngOnInit() {
    console.log(this.auth.loggedIn())
  }

  logout(){
    this.auth.logout()
    this.fmservice.show('You Logged In',{cssclass:'alert-success',timeOut:3000})
    this.router.navigate(['/login'])
  }

}
