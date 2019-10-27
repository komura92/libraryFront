import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.getLogged()) {
      this.router.navigate(['/']);
    }
  }

  register() {
    let login = (document.getElementById('username') as HTMLInputElement).value;
    let password = (document.getElementById('passwd') as HTMLInputElement).value;
    this.authService.register(login, password);
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.register();
    }
  }

}
