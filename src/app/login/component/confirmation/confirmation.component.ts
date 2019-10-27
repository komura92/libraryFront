import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (!this.authService.getLogged()) {
        this.router.navigate(['/']);
    }
  }

  delete() {
    let password = (document.getElementById('passwd') as HTMLInputElement).value;
    this.authService.delete(password);
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.delete();
    }
  }

}
