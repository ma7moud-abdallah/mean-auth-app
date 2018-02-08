import { ValidateService } from './services/validate.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule} from '@angular/forms'
import {FlashMessagesModule} from 'angular2-flash-messages';
import {HttpModule,Headers} from '@angular/http'

import { AuthService } from './services/Auth.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes:Routes=[
   {path:'',component:HomeComponent},
   {path:'register',component:RegisterComponent},
   {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuardService]},
   {path:'login',component:LoginComponent,},
   {path:'profile',component:ProfileComponent,canActivate:[AuthGuardService]}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NavComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    FlashMessagesModule,
    HttpModule
  ],
  providers: [AuthService,ValidateService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
