import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated: boolean;

  constructor() { }
  isAuthenticated() {
    return this.authenticated = true;
  }

  logIn() {
    this.authenticated = true;
  }

  logOut() {
    this.authenticated = false;
  }
}
