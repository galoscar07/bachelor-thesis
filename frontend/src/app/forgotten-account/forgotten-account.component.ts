import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../shared/api.service';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgotten-account',
  templateUrl: './forgotten-account.component.html',
  styleUrls: ['./forgotten-account.component.css']
})
export class ForgottenAccountComponent implements OnInit {

  forgottenAccountForm: FormGroup;
  errors = {
    email: null,
  };
  emailHasBeenSend = false;

  constructor(private apiService: ApiService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.forgottenAccountForm = new FormGroup({
      emailForgotten: new FormControl(null, [Validators.required, Validators.email])
    });
  }

  onSubmitForgotten() {
    const email = this.forgottenAccountForm.value.emailForgotten;
    this.apiService.postPasswordReset(email).subscribe(
      (response: any) => {
        if (response.detail === 'Password reset e-mail has been sent.') {
          this.emailHasBeenSend = true;
        }
      },
      (error1 => {
        this.errors = error1.error;
        this.forgottenAccountForm.reset();
      })
    );
  }

}
