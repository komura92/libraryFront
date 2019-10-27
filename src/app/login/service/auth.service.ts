import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserAuthenticatedModel } from '../model/user.authenticated.model';
import { UserLoginModel } from '../model/user.login.model';
import { UserChangePasswordModel } from '../model/user.change.password.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUrl = 'http://localhost:8090/login/auth';
  registerUrl = 'http://localhost:8090/login/register';
  updateUrl = 'http://localhost:8090/login/update';
  deleteUrl = 'http://localhost:8090/login/delete';

  constructor(private _http: HttpClient, private router: Router) { }

  login(login: string, password: string) {
    let userLogin = new UserLoginModel(login, password);
    return this._http.post<UserAuthenticatedModel>(this.loginUrl, userLogin)
      .subscribe(data => {
        localStorage.setItem('logged', 'true');
        localStorage.setItem('bearer', 'Bearer ' + data.jwt);
        localStorage.setItem('username', data.login);
        localStorage.setItem('role', data.role);
        this.router.navigate(['/']);
      });
  }

  logout() {
    localStorage.removeItem('logged');
    localStorage.removeItem('bearer');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    this.router.navigate(['/']);
  }

  register(login: string, password: string) {
    let userRegisterModel = new UserLoginModel(login, password);
    return this._http.post<UserAuthenticatedModel>(this.registerUrl, userRegisterModel)
      .subscribe( ()=>
        {
          this.router.navigate(['/login']);
        }
      );
  }

  changePassword(login: string, oldPassword: string, newPassword: string) {
    let userChangePasswordModel = new UserChangePasswordModel(login, oldPassword, newPassword);
    let token = this.getToken();
    return this._http.put<UserAuthenticatedModel>(
      this.updateUrl, 
      userChangePasswordModel,
      {
        headers : new HttpHeaders({'Authorization' : token})
      })
      .subscribe( () => {
        this.router.navigate(['/']);
      });
  }

  delete(password: string) {
    let token = this.getToken();
    let user = new UserLoginModel(
      this.getUsername(),
      password
    );
    return this._http.post<UserAuthenticatedModel>(
      this.deleteUrl, 
      user,
      {
        headers : new HttpHeaders({'Authorization' : token})
      })
      .subscribe( () => {
        this.logout();
        this.router.navigate(['/']);
      });
  }

  getLogged() {
    return localStorage.getItem('logged') == 'true';
  }

  getUsername() {
    return localStorage.getItem('username');
  }

  getRole() {
    return localStorage.getItem('role');
  }

  getToken() {
    return localStorage.getItem('bearer');
  }
}
