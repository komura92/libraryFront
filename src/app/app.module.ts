import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyBooksComponent } from './books/my/component/my-books/my-books.component';
import { AllBooksComponent } from './books/all/component/all-books/all-books.component';
import { AuthComponent } from './login/component/auth/auth.component';
import { NavbarComponent } from './navbar/component/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './login/service/auth.service';
import { AllBooksService } from './books/all/service/all-books.service';
import { MyAccountComponent } from './login/component/my-account/my-account.component';
import { RegisterComponent } from './login/component/register/register.component';
import { ConfirmationComponent } from './login/component/confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    MyBooksComponent,
    AllBooksComponent,
    AuthComponent,
    RegisterComponent,
    NavbarComponent,
    MyAccountComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AllBooksService, 
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
