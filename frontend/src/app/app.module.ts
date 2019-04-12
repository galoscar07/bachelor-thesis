import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    MainpageComponent,
    ForgottenAccountComponent,
    PasswordResetComponent,
    RegistrationComponent
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
