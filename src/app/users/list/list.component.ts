import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {UsersMockServiceService} from "../../users-mock-service.service";
import { User} from "../../interfaces/user";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterViewInit {
  public displayedColumns: string[] = ['id', 'name', 'username', 'actions'];
  public usersDataSource !: MatTableDataSource<User>;

  @ViewChild(MatSort, {static:true}) sort?:MatSort ;

  constructor(private usersMockService: UsersMockServiceService) {}
  ngAfterViewInit() {
    if (this.sort){
      this.usersDataSource.sort = this.sort;
    }
  }
  ngOnInit() {
    this.usersDataSource = new MatTableDataSource<User>(this.usersMockService.userStorage);
    if (this.sort){
      this.usersDataSource.sort = this.sort;
    }
  }
  deleteUser(user: User) {
    this.usersMockService.deleteUser(user);
    this.usersDataSource = new MatTableDataSource<User>(this.usersMockService.userStorage);
  }

}
