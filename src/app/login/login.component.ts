import {Component, Input} from '@angular/core';
import {UserSessionService} from "../services/user-session.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginMockService} from "../services/login-mock.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private isUserLogged: boolean = false;
  public loginForm: FormGroup;
  public inputType: string = '';
  public hide: boolean = true;

  constructor(private userSession: UserSessionService,
              private formBuilder: FormBuilder,
              private loginMockService: LoginMockService,
              private router: Router,
              private snackBar: MatSnackBar) {

    this.loginForm = this.formBuilder.group({
      username: [
        '',
      ], password: ''
    });
  }

  ngOnInit() {
    this.isUserLogged = this.userSession.isUserLogged();
  }
  logUserIn() {
    if (this.loginForm.valid){
      console.log('Logging user in');
      this.snackBar.open('Login', '', {
          'duration': 1000,
          'horizontalPosition': 'center',
          'verticalPosition': 'top',
      });

      if (this.loginMockService.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value)) {
        this.userSession.logUserIn();
        this.router.navigate(['/', 'pokemons']);
      } else {
        alert('Wrong credentials');
      }

    }
  }

  toggleHide() {
    this.hide = !this.hide;
    this.inputType = this.hide ? 'text' : 'password';
  }
}
