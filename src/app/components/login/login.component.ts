import { Component, EventEmitter, Output } from '@angular/core';
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
    email: "",
    password: ""
  }

  isFormValidate = false;
  connexionKO = false;
  isLog: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  login(connexionForm: NgForm) {
    this.isFormValidate = true;

    if (connexionForm.valid) {
      this.userService.login(this.user).subscribe({
        next: (response) => {
          sessionStorage.setItem('token', response.accessToken);
          this.router.navigate(['home']);
          this.isLog = true;
          this.userService.userStatusEmitterEvent(this.isLog)
        },
        error: (error) => {
          this.connexionKO = true;
        },
      });

      
    }
  }
}
