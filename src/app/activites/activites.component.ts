import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { ActivitesService } from '../activites.service';

@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.css']
})
export class ActivitesComponent  {
public activites:any=[];
  constructor(private _activitesService:ActivitesService) {
    _activitesService.getActivites().subscribe(
      (data:any)=>{
        this.activites=data;
      },
      (err:any)=>{
        alert("Internal error");
      }
    )
   }

  

}
