import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ApiService} from '../shared/api.service';
import {AuthService} from '../shared/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  passwordReset: FormGroup;
  token: string;
  uid: string;
  errors = {
    new_password1: null,
    new_password2: null,
    token: null,
    uid: null,
  };

  constructor(private apiService: ApiService,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.uid = params.uid;
      this.token = params.token;
    });
  }

  ngOnInit() {
    this.passwordReset = new FormGroup({
      password1Reset: new FormControl(null, []),
      password2Reset: new FormControl(null, [])
    });
  }

  onSubmitPasswordReset() {
    const password1 = this.passwordReset.value.password1Reset;
    const password2 = this.passwordReset.value.password2Reset;
    console.log(password1, password2, this.uid, this.token)
    this.apiService.postNewPassword(password1, password2, this.uid, this.token).subscribe(
      (response: Response) => {
        this.router.navigate(['/']);
      },
      (error1 => {
        this.errors = error1.error;
      })
    );
  }

}
