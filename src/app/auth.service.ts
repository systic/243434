import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()

/**
 * AuthService: handles login and logout
 */
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): boolean {
    this.isLoggedIn = true;
    const d = new Date();
    localStorage.setItem('authToken', 'token' + d.getTime());
    return true;
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.isLoggedIn = false;
  }
}
