import { Component } from '@angular/core';
import {UsersMockServiceService} from "../users-mock-service.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import { User } from "../interfaces/user";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})

export class UserEditComponent {
  private id: any;
  userForm: any;
  private name ?: string;
  private user ?: User;

  constructor(private usersMockService: UsersMockServiceService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.user = this.usersMockService.getUserById(this.id);

    this.userForm = new FormGroup({
      name: new FormControl(this.user?.name),
      username: new FormControl(this.user?.username),
      password: new FormControl(this.user?.password)
    });

  }

  onSubmit() {
    this.userForm.value.id = this.id;

    this.usersMockService.updateUser( this.userForm.value);
    this.router.navigate(['users']);
  }
}
