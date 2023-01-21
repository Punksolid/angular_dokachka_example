import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {UsersMockServiceService} from "../../users-mock-service.service";
import { Validators } from "@angular/forms";

interface User {
  name: string;
  username: string;
  password: string;
}

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit {
  public newUserForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
              private usersMockService: UsersMockServiceService,
              private router: Router,
              ) {}

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      name: ['', Validators.required, Validators.min(3)],
      username: '',
      password: '',
    });

  }

  onSubmit() {
    console.table(this.newUserForm.value);
    this.usersMockService.addUser(this.newUserForm.value);
    this.router.navigate(['users']);
  }
}
