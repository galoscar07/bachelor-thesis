import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatTooltipModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainpageComponent } from './mainpage/mainpage.component';
import {ApiService} from './shared/api.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './shared/auth.service';
import {AuthGuardService} from './shared/auth-guard.service';
import { ForgottenAccountComponent } from './forgotten-account/forgotten-account.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { RegistrationComponent } from './registration/registration.component';
import { NewFileComponent } from './new-file/new-file.component';
import { FileComponent } from './file/file.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuestionComponentComponent } from './question-component/question-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    MainpageComponent,
    ForgottenAccountComponent,
    PasswordResetComponent,
    RegistrationComponent,
    NewFileComponent,
    FileComponent,
    PageNotFoundComponent,
    QuestionComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTooltipModule,
    BrowserAnimationsModule,
  ],
  providers: [ApiService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
