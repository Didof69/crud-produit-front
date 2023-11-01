import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  //initialisation de l'état de la connexion
  isLog!: boolean;
  
  constructor(private userService: UserService) { }
  
  ngOnInit() {
    this.userService.userStatusEmitter.subscribe((data) => this.isLog = data)
    //récupération de l'état de la connexion auprès du Subject dans userService
  }
  
  //déconnecte et efface le token
  onDeconnexion() {
    sessionStorage.clear();
    this.isLog=false
    this.userService.userStatusEmitterEvent(this.isLog)
    location.reload();
  }
}
