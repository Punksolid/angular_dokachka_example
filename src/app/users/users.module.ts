import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {ListComponent} from './list/list.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatSortModule} from "@angular/material/sort";
import { UserNewComponent } from './user-new/user-new.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {UserEditComponent} from "../user-edit/user-edit.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {UserRegisterComponent} from "../user-register/user-register.component";


@NgModule({
  declarations: [
    ListComponent,
    UserNewComponent,
    UserEditComponent,
    UserRegisterComponent
  ],
  imports: [
    // Material modules
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSortModule,
    MatInputModule,
    MatListModule,
    MatFormFieldModule,
    // Angular modules
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule
    // Other modules

  ]
})
export class UsersModule {
}
