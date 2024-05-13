import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string) {
    return localStorage.setItem(KEY, token);
  }

  removeToken() {
    return localStorage.removeItem(KEY);
  }

  getToken() {
    return localStorage.getItem(KEY) ?? '';
  }

  hasToken() {
    return !!this.getToken();
  }
}
