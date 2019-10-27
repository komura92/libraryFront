import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllBooksComponent } from './books/all/component/all-books/all-books.component';
import { MyBooksComponent } from './books/my/component/my-books/my-books.component';
import { AuthComponent } from './login/component/auth/auth.component';
import { RegisterComponent } from './login/component/register/register.component';
import { MyAccountComponent } from './login/component/my-account/my-account.component';
import { ConfirmationComponent } from './login/component/confirmation/confirmation.component';

const routes: Routes = [
  { path: '', component: AllBooksComponent},
  { path: 'myBooks', component: MyBooksComponent},
  { path: 'login', component: AuthComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'myAccount', component: MyAccountComponent},
  { path: 'delete', component: ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
