import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[];
  hasPermission: false;
  constructor() { }

  ngOnInit() {
    if (this.hasPermission) {
      this.getUsers()
      .then(users => this.users = users)
      .catch(e => console.log(e.message));
    } else {
      this.users = [];
    }
  }

  async getUsers() {
    return [
      {name: 'Jesus', email: 'jesus@angular.com'},
      {name: 'John', email: 'john@angular.com'}
    ];
  }

}
