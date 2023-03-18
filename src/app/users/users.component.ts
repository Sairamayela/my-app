import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  public users: any = [];
  public term: string = "";
  public column: string = "";
  public order: string = "";

  constructor(private _usersService: UsersService, private _router: Router) {
    _usersService.getUsers().subscribe(
      (data: any) => {
        this.users = data;
      },
      (err: any) => {
        alert("Internal server error")
      }
    )
  }
  filter() {
    this._usersService.getFliteredUsers(this.term).subscribe(
      (data: any) => {
        this.users = data;
      },
      (err: any) => {
        alert("interna server error")
      }
    )
  }
  view(id: string) {
    this._router.navigateByUrl("/dashboard/user-details/" + id);
  }
  sort() {
    this._usersService.getSortedUsers(this.column, this.order).subscribe(
      (data: any) => {
        this.users = data;
      },
      (err: any) => {
        alert("interna server error")
      }
    )
  }
  edit(id: string) {
    this._router.navigateByUrl("/dashboard/creat-users/" + id);
  }
  page(no: number) {
    this._usersService.getpagedUsers(no, 10).subscribe(
      (data: any) => {
        this.users = data;
      },
      (err: any) => {
        alert("interna server error")
      }
    )
  }
  delete(id: string) {
    this._usersService.deleteUsers(id).subscribe(
      (data: any) => {
        alert("Delete succesfuly");
        location.reload();
      },
      (err: any) => {
        alert("interna server error")
      }
    )
  }

}
