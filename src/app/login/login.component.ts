import { Component } from '@angular/core';
import {UserSessionService} from "../services/user-session.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private isUserLogged: boolean = false;
  public loginform: FormGroup;

  constructor(private userSession: UserSessionService,
              private formBuilder: FormBuilder,
              private router: Router) {

    this.loginform = this.formBuilder.group({
      username: [
        '',
      ], password: ''
    });
  }

  ngOnInit() {
    this.isUserLogged = this.userSession.isUserLogged();
  }
  logUserIn() {
    if (this.loginform.valid){
      this.userSession.logUserIn();
      this.router.navigate(['/pokemons']);
    }
  }
}
