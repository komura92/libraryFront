import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/books/model/book.model';
import { MyBooksService } from '../../service/my-books.service';
import { AuthService } from 'src/app/login/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {
  books$: BookModel[];
  
  constructor(
    private myBooksService: MyBooksService, 
    private authService: AuthService, 
    private router: Router
    ) { }

  ngOnInit() {
    if (!this.authService.getLogged()) {
      this.router.navigate(['/']);
      return;
    }
    this.myBooksService.getMyBooks()
    .subscribe(data => this.books$ = data);
  }

  returnBook(id: number) {
    this.myBooksService.returnBook(id)
    .subscribe(() => {
      this.ngOnInit()
    });
  }

  select(num: number) {
    //alert("selected:" + num);
  }

}
