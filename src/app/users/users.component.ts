import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {
  public users:any=[];
  public term:string="";
  public column:string="";
  public order:string="";

  constructor(private _usersService:UsersService) {
    _usersService.getUsers().subscribe(
      (data:any)=>{
        this.users=data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
   }
   filter(){
    this._usersService.getFliteredUsers(this.term).subscribe(
      (data:any)=>{
        this.users=data;
      },
      (err:any)=>{
        alert("interna server error")
      }
    )
   }
   sort(){
    this._usersService.getSortedUsers(this.column,this.order).subscribe(
      (data:any)=>{
        this.users=data;
      },
      (err:any)=>{
        alert("interna server error")
      }
    )
   }
   page(no:number){
    this._usersService.getpagedUsers(no,10).subscribe(
      (data:any)=>{
        this.users=data;
      },
      (err:any)=>{
        alert("interna server error")
      }
    )
   }
   delete(id:string){
    this._usersService.deleteUsers(id).subscribe(
      (data:any)=>{
        alert("Delete succesfuly");
        location.reload();
      },
      (err:any)=>{
        alert("interna server error")
      }
    )
   }

}
