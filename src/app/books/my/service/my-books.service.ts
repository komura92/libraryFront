import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BookModel } from '../../model/book.model';
import { AuthService } from 'src/app/login/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MyBooksService {
  myBooksUrl = 'http://localhost:8090/books/myBooks';
  returnUrl = 'http://localhost:8090/books/return/';

  constructor(private _http: HttpClient, private authService: AuthService) {
    if (!this.authService.getLogged()) {
      window.location.href = '/';
    }
  }

  getMyBooks() {
    let token = this.authService.getToken();
    return this._http.get<BookModel[]>(
      this.myBooksUrl, 
      {
        headers : new HttpHeaders({
          'Authorization': token
        })
      }
      );
  }

  returnBook(id: number) {
    let token = this.authService.getToken();
    return this._http.get<any>(
      this.returnUrl + id.toString(), 
      {
        headers : new HttpHeaders({
          'Authorization': token
        })
      }
      );
  }
}
