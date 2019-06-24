import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {MainpageComponent} from './mainpage/mainpage.component';
import {AuthGuardService} from './shared/auth-guard.service';
import {ForgottenAccountComponent} from './forgotten-account/forgotten-account.component';
import {PasswordResetComponent} from './password-reset/password-reset.component';
import {RegistrationComponent} from './registration/registration.component';
import {NewFileComponent} from './new-file/new-file.component';
import {FileComponent} from './file/file.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: MainpageComponent, canActivate: [AuthGuardService]},
  { path: 'forgotten-account', component: ForgottenAccountComponent},
  { path: 'password-reset', component: PasswordResetComponent },
  { path: 'registration-complete', component: RegistrationComponent},
  { path: 'new-file', component: NewFileComponent },
  { path: 'file/:id', component: FileComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
