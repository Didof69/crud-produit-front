import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isLog = false
  
  constructor(private userService: UserService) { }
  
  ngOnInit() {
    this.userService.userStatusEmitter.subscribe((data) => {
    this.isLog = data
  })
  }
  
  onDeconnexion() {
    sessionStorage.clear();
    location.reload();
  }
}
