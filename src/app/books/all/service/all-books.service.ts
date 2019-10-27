import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BookModel } from '../../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class AllBooksService {
  allBooksUrl = 'http://localhost:8090/books';
  rentUrl = 'http://localhost:8090/books/rent/';

  constructor(private _http: HttpClient) { 
    //this.myHeaders = this.myHeaders.append('Authorization', this.myToken); //No kurwa genialne | PAMIETAJ
  }

  getAvailableBooks(){
    return this._http.get<BookModel[]>(this.allBooksUrl);
  }

  rentBook(id: number) {
    let token = localStorage.getItem('bearer');
    return this._http.get<any>(
      this.rentUrl + id.toString(), 
      {
        headers : new HttpHeaders({
          'Authorization': token
        })
      }
      );
  }
}
