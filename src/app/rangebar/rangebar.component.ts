import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-rangebar',
  templateUrl: './rangebar.component.html',
  styleUrls: ['./rangebar.component.css']
})
export class RangebarComponent {
  zoom: number = 1;

  onZoomChange(event: Event) {
    this.zoom = parseFloat((<HTMLInputElement>event.target).value);
  }
  selectedColor: string = 'white';

  changeBackgroundColor() {
    document.body.style.backgroundColor = this.selectedColor;
  }
  
  constructor() { 
    
  }
  
}

