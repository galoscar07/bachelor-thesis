import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ApiService {
  apiLink = 'http://localhost:8000/';
  constructor(private http: HttpClient) {}

  postRegisterUser(username: string, email: string, password1: string, password2: string, firstName: string, lastName: string) {
    return this.http.post(this.apiLink + 'auth/registration/', {
      username,
      email,
      password1,
      password2,
      first_name: firstName,
      last_name: lastName
    });
  }

  postLogInUser(email: string, password: string) {
    return this.http.post(this.apiLink + 'auth/login/', {
      email, password
    });
  }

  postLogOutUser(token: string) {
    return this.http.post(this.apiLink + 'auth/logout/', {
      token,
    });
  }

  postPasswordReset(email: string) {
    return this.http.post(this.apiLink + 'auth/password/reset/', {
      email,
    });
  }

  postNewPassword(new_password1: string, new_password2: string, uid: string, token: string) {
    return this.http.post(this.apiLink + 'auth/password/reset/confirm/', {
      new_password1,
      new_password2,
      uid,
      token,
    });
  }
}
