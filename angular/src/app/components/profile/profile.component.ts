import { AuthService } from '../../services/Auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user ={}
  constructor( private auth:AuthService) { }

  async ngOnInit() {
  this.user  = await  this.auth.getProfile()
    
  }

}
