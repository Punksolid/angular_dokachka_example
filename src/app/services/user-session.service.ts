import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {
  // add a global variable
  private isUserLoggedVariable:boolean = false;


  constructor() { }

  logUserIn() {
    this.isUserLoggedVariable = true;
  }

  isUserLogged() {
    return this.isUserLoggedVariable;
  }
}
