import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent  {
public user:any={};
  constructor(private _activatedRoute:ActivatedRoute, private _userService:UsersService) { 
    _activatedRoute.params.subscribe(
      (data:any)=>{
        // alert(data.id);

        _userService.getUser(data.id).subscribe(
          (data:any)=>{
           this.user=data; 
            
          },
          (err:any)=>{
            alert("error")
          }

        )
      }
    )
  }

 
}
