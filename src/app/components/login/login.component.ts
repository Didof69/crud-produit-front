import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: User = {
    email: '',
    password: '',
  };

  //initialisation des paramètres d'erreur du formulaire
  isFormValidate = false;
  connexionKO = false;

  //initisalisation de l'état de la connexion
  isLog!: boolean ;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.userStatusEmitter.subscribe((data) => (this.isLog = data));
    //récupération de l'état de la connexion auprès du Subject dans userService
  }
  
  login(connexionForm: NgForm) {
    this.isFormValidate = true;

    if (connexionForm.valid) {
      this.userService.login(this.user).subscribe({
        next: (response) => {
          sessionStorage.setItem('token', response.accessToken); //sauvegarde du token dan sessionStorage
          this.router.navigate(['home']);
          this.isLog = true;
          this.userService.userStatusEmitterEvent(this.isLog); //abonnement au subject dans userService
        },
        error: (error) => {
          this.connexionKO = true;
        },
      });
    }
  }
}
