import { Injectable } from '@angular/core';

interface User {
  id ?: number;
  name: string;
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersMockServiceService {
  private _userStorage: Array<User> = [
    {id: 1, name: 'Jose', username:'jose', password:'1234567890'},
    {id: 2, name: 'Manuel', username:'manuel', password:'1234567890'},
    {id: 3, name: 'Pedro', username: 'pedro' , password:'1234567890'},
    {id: 4, name: 'Luis', username: 'luis' , password:'1234567890'},
    {id: 5, name: 'Carlos', username: 'carlos' , password:'1234567890'},
  ];

  constructor() { }

  get userStorage(): User[] {
    return this._userStorage;
  }

  public addUser(user: User) {

    const lastId = this._userStorage[this._userStorage.length - 1].id;
    if (lastId) {
      user.id = lastId + 1;
    }

    this._userStorage.push(user);
  }

  public deleteUser(user: User) {
    this._userStorage = this._userStorage.filter((u) => u.id !== user.id);
  }

  updateUser(userForm: User | undefined) {
    if (userForm) {
      const user = this._userStorage.find((u) => u.id == userForm.id);
      console.log(user);
      if (user) {
        user.name = userForm.name;
        user.username = userForm.username;
        user.password = userForm.password;
      }
    }
  }

  getUserById(id: number) {
    return this._userStorage.find((u) => u.id == id);
  }
}
