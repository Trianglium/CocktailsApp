import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated: boolean;
  private isLoggedIn: boolean;

  constructor() { }

  isAuthenticated() {
    // return this.authenticated = true;
    return this.isLoggedIn;
  }

  logIn() {
    this.authenticated = true;
    this.isLoggedIn = true;
  }

  logOut() {
    this.authenticated = false;
    this.isLoggedIn = false;
  }
}
