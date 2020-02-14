import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
private userSub:Subscription;
  constructor() { }
//  private dataStorageService: DataStorageService,
//  private authservice: AuthService
   ngOnInit() {
//     this.authService.user.subscribe()
  }
// onSaveData(){
//   this.dataStorageService.movies()
// }
}

