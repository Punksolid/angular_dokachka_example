import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginMockService {

  credentials = {
    username: 'admin',
    password: '1234567890'
  }

  login(username: string, password: string) {
    return username === this.credentials.username && password === this.credentials.password;

  }

  constructor() { }
}
