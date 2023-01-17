import { Component } from '@angular/core';


interface User {
  id: number;
  name: string;
  actions: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public dataSource2: User[];
  public displayedColumns: any;

  constructor() {
    this.dataSource2 = [
      {id: 1, name: 'Jose', actions: 'actions'},
      {id: 2, name: 'Manuel', actions: 'actions'},
      {id: 3, name: 'Pedro', actions: 'actions'},
      {id: 4, name: 'Carlos', actions: 'actions'},
    ];
  }

  ngOnInit() {

    this.displayedColumns= ['name', 'actions'];
  }

  // edit(element) {
  //
  // }
  //
  // delete(element) {
  //
  // }
  deleteUser(user: User) {
    console.log(user);
    this.dataSource2 = this.dataSource2.filter((element) => element.id !== user.id);
  }
}
