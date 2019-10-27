import { Component, OnInit } from '@angular/core';
import { AllBooksService } from '../../service/all-books.service';
import { BookModel } from 'src/app/books/model/book.model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/login/service/auth.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  books$: BookModel[];
  logged: boolean;

  constructor(private allBooksService: AllBooksService, private authService: AuthService) { }

  ngOnInit() {
    this.logged = this.authService.getLogged();
    return this.allBooksService.getAvailableBooks()
      .subscribe(data => this.books$ = data);
  }

  select(num: number) {
    //alert("selected:" + num);
  }

  rentBook(id: number) {
    this.allBooksService.rentBook(id)
      .subscribe(() => {this.ngOnInit()});
  }
}
