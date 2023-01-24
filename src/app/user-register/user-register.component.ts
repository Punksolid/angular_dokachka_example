import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UsersMockServiceService} from "../users-mock-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {
  constructor(private userService: UsersMockServiceService, private router: Router) {
  }
  registerUser(userRegisterForm: NgForm) {
    console.log(userRegisterForm.value);
    this.userService.addUser(userRegisterForm.value);
    this.router.navigate(['/users']);
  }
}
