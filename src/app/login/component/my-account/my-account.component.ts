import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  username: string;
  role: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (!this.authService.getLogged()) {
      this.router.navigate(['/']);
      return;
    }
    this.username = this.authService.getUsername();
    this.role = this.authService.getRole();
  }

  changePassword() {
    let oldPassword = (document.getElementById('oldpasswd') as HTMLInputElement).value;
    let newPassword = (document.getElementById('newpasswd') as HTMLInputElement).value;
    this.authService.changePassword(this.username, oldPassword, newPassword);
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.changePassword();
    }
  }

}
