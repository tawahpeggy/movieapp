import { Component, OnInit } from '@angular/core';
import {AuthService } from '../auth.service';
import {HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  successfullogout: string;
  constructor( private authService: AuthService, private httpClientModule:HttpClientModule) { }

  ngOnInit() {
    console.log(this.successfullogout);
  }
  onLogout() {
    this.authService.logout();
    this.successfullogout="successfully loggedout";
  }
  
  
}
  