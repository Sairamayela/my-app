import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent  {
public ages:number[] = [10,20,30,40];
public names:string[] = ["sai","ram","sai","ram"]
public states:string[]= ["ap","ts","up","kra"]
public users:any = [
  {name:'abc',phone:9515969160,marks:25,age:15},
  {name:'hsg',phone:5465954545,marks:55,age:18},
  {name:'jhu',phone:5784545480,marks:85,age:20}
]
public products:any =[
  {name:'pen',price:'10',rating:2},
  {name:'book',price:'100',rating:2},
  {name:'mobile',price:'510',rating:2},
  {name:'tv',price:'170',rating:2},
  {name:'bike',price:'150',rating:2},
  {name:'gold',price:'180',rating:2}
]
public today:any = new Date();
}
