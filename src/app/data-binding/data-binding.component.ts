import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent{

public phone:number=9515969160;
public name:string="sai";
public isIndian:boolean=true;
public mobile:number=91;
submit(){
  alert("submit clicked")
}
test(){
  alert("double clicked")
}
enter(){
  alert("mouse enter")
}
leave(){
  alert("mouse leave")
}
key(){
  alert("key pressed")
}
}
