import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {MainpageComponent} from './mainpage/mainpage.component';
import {AuthGuardService} from './shared/auth-guard.service';
import {ForgottenAccountComponent} from './forgotten-account/forgotten-account.component';
import {PasswordResetComponent} from './password-reset/password-reset.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: MainpageComponent, canActivate: [AuthGuardService]},
  { path: 'forgotten-account', component: ForgottenAccountComponent},
  { path: 'password-reset', component: PasswordResetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
