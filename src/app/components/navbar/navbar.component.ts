import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isLog=false
  ngOnInit() {
    if (sessionStorage.getItem('token')) {
    this.isLog=true
  }
  }
  
  onDeconnexion() {
    sessionStorage.clear();
    location.reload();
  }
}
