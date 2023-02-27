import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
public length:number =0;
public width:number =0;
public area:number =0;
public perimeter:number =0;
 
area1(){
  this.area = this.length * this.width;
}
perimeter1(): void{
this.perimeter = 2 * (this.length + this.width);
}
}