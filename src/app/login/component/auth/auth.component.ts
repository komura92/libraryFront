import { Component, OnInit } from '@angular/core';
import { UserAuthenticatedModel } from 'src/app/login/model/user.authenticated.model';
import { UserLoginModel } from 'src/app/login/model/user.login.model';
import { UserChangePasswordModel } from 'src/app/login/model/user.change.password.model';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user: UserAuthenticatedModel;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.getLogged()) {
      this.router.navigate(['/']);
    }
  }

  login() {
    let login = (document.getElementById('username') as HTMLInputElement).value;
    let password = (document.getElementById('passwd') as HTMLInputElement).value;
    this.authService.login(login, password);
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.login();
    }
  }

  delete() {
    let password = (document.getElementById('passwd') as HTMLInputElement).value;
    this.authService.delete(password);
  }

}
