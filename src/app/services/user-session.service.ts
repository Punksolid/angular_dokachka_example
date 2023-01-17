import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {
  private isUserLoggedVariable:boolean = false;

  constructor() { }

  logUserIn() {
    console.log('logging user in');
    this.isUserLoggedVariable = true;
  }

  isUserLogged() {
    return this.isUserLoggedVariable;
  }

  logout() {
    this.isUserLoggedVariable = false;
  }
}
