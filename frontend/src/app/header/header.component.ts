import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../shared/api.service';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  signinForm: FormGroup;
  errors = {
    username: null,
    password: null,
    non_field_errors: null,
  };

  constructor(private apiService: ApiService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      emailHeader: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onSubmitSignin() {
    const email = this.signinForm.value.emailHeader;
    const password = this.signinForm.value.password;
    this.apiService.postLogInUser(email, password).subscribe(
      (response: any) => {
        this.authService.setTokenLocalStorage(response.key);
        this.router.navigate(['/home']);
        this.signinForm.reset();
      },
      (error1 => {
        this.errors = error1.error;
        console.log(error1);
      })
    );
  }

  onLogoutClicked() {
    const token = this.authService.token;
    this.authService.deleteTokenFromLocalStorage();
    this.apiService.postLogOutUser(token).subscribe(
      (response: any) => {
        this.router.navigate(['/']);
      },
      (error1 => {
        alert(error1);
      })
    );
    this.router.navigate(['/']);
  }
}
