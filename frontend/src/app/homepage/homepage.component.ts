import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../shared/api.service';
import {error} from '@angular/compiler/src/util';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  signupForm: FormGroup;
  signupFormSubmitted = false;
  errors = {
    first_name: null,
    last_name: null,
    username: null,
    password1: null,
    password2: null,
    email: null,
  };

  constructor(private apiService: ApiService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    if (this.authService.isUserAuthenticated()) {
      this.router.navigate(['/home']);
    }
    this.signupForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required]),
      emailHomepage: new FormControl(null, [Validators.required, Validators.email]),
      passwordHomepage1: new FormControl(null, [Validators.required]),
      passwordHomepage2: new FormControl(null, [Validators.required]),
    });
  }

  onSubmitRegister() {
    const email = this.signupForm.value.emailHomepage;
    const firstName = this.signupForm.value.firstName;
    const lastName = this.signupForm.value.lastName;
    const username = this.signupForm.value.username;
    const password1 = this.signupForm.value.passwordHomepage1;
    const password2 = this.signupForm.value.passwordHomepage2;
    console.log(email, firstName, lastName, username, password1, password2);
    this.apiService.postRegisterUser(username, email, password1, password2, firstName, lastName).subscribe(
      (response: Response) => {
        this.signupFormSubmitted = true;
      },
      (error1 => {
        this.errors = error1.error;
      })
    );
  }
}
