import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {


  public names:string[] =[];
  public name: string ='';
  regsitration(){
    this.names.push(this.name);
    this.name = '';
  }

}
