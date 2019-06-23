import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  token: string = null;

  setTokenLocalStorage(token: string) {
    localStorage.setItem('authToken', token);
    this.token = token;
  }

  deleteTokenFromLocalStorage() {
    localStorage.removeItem('authToken');
    this.token = null;
  }

  isUserAuthenticated() {
    if (this.token === null) {
      const token = localStorage.getItem('authToken');
      if (token === null) {
        return false;
      }
    }
    return true;
  }

  get_token() {
    if (this.token === null) {
      const token = localStorage.getItem('authToken');
      if (token === null) {
        return null;
      }
      return token;
    }
    return this.token;
  }
}
