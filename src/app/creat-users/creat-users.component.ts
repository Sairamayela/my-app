import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-creat-users',
  templateUrl: './creat-users.component.html',
  styleUrls: ['./creat-users.component.css']
})
export class CreatUsersComponent {
public userForm:FormGroup=new FormGroup(
{
  name:new FormControl(),
  phone:new FormControl(),
  city:new FormControl(),
  image:new FormControl()
}
);
  constructor(private _usersService:UsersService) { }
  submit(){
    console.log(this.userForm);
  this._usersService.creatUsers(this.userForm.value).subscribe(
    (data:any)=>{
      alert("user created successfully")
    },
    (err:any)=>{
      alert("internal server error")
    }
  )
  }

  

}
