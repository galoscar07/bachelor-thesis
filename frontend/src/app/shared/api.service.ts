import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from "./auth.service";

@Injectable()
export class ApiService {
  // apiLink = 'https://stud-help-api.herokuapp.com/';
  apiLink = 'http://localhost:8000/';
  constructor(private http: HttpClient, private authService: AuthService) {}

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

  postRegistrationAccountConfirmEmail(token: string) {
    return this.http.get(this.apiLink + 'auth/registration/account-confirm-email/' + token + '/', {});
  }

  postNewDocument(title: string, content: string, shortContent: string) {
    return this.http.post(this.apiLink + 'api/v1/document/', {
      title,
      content,
      short_content: shortContent,
    }, {headers: {
        Authorization: 'Token ' + this.authService.get_token()

      }});
  }

  getDocuments() {
    return this.http.get(this.apiLink + 'api/v1/document/', {
      headers: {
        Authorization: 'Token ' + this.authService.get_token()
      }
    });
  }

  getDocumentWithIdAndQuestions(documentId: string) {
    return this.http.get(this.apiLink + 'api/v1/document/' + documentId + '/', {
      headers: {
        Authorization: 'Token ' + this.authService.get_token()
      }
    });
  }

  deleteFile(id: string) {
    return this.http.delete(this.apiLink + 'api/v1/document/' + id + '/', {
      headers: {
        Authorization: 'Token ' + this.authService.get_token(),
      }
    });
  }
}
